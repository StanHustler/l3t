import browser from 'webextension-polyfill';
import {ContextMap, invalidTags, WordInfoMap, WordMap} from "../constant";
import {adjustCardPosition, toggleCard} from "../component/L3t-Card";



let wordsKnown: WordMap = {}
let fullDict: WordInfoMap = {}
let dict: WordInfoMap = {}
let contexts: ContextMap = {}

export let wordNodes = document.querySelectorAll('l3t-word')

function highlight(node: Node, word?: string) {

    function getTextNodes(node: Node): Text[] {
        const textNodes = []
        const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, (node: Node) => {
            if (invalidTags.includes(node.parentElement?.tagName ?? '')) {
                return NodeFilter.FILTER_REJECT
            } else {
                return NodeFilter.FILTER_ACCEPT
            }
        })

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode as Text)
        }

        return textNodes
    }

    const textNodes = getTextNodes(node)
    for (const node of textNodes) {
        highlightTextNode(node, dict, wordsKnown, word)
    }
}

export function getOriginForm(word: string) {
    return fullDict[word]?.o ?? word
}

function highlightTextNode(node: CharacterData, dict: WordInfoMap, wordsKnown: WordMap, word?: string) {
    const text = node.nodeValue || ''
    let toHighlightWords = []
    const segmenterEn = new Intl.Segmenter('en-US', { granularity: 'word' })
    const segments = segmenterEn.segment(text)

    const totalLength = node.length
    let preEnd = 0
    let curNode = node

    for (const segment of segments) {
        const w = segment.segment.toLowerCase()
        if (segment.isWordLike && w in dict) {
            // console.log("-- " + w)
            const originFormWord = getOriginForm(w)
            if (!(originFormWord in wordsKnown)) {
                if (word && word !== originFormWord) continue
                const range = new Range()
                range.setStart(curNode, segment.index - preEnd)
                range.setEnd(curNode, segment.index - preEnd + w.length)

                // const trans = settings().showCnTrans && fullDict[originFormWord]?.t
                // if (trans) {
                //     // avoid duplicated
                //     if (range.endContainer.nextSibling?.nodeName === 'W-MARK-T') {
                //         continue
                //     }
                //     // insert trans tag after range
                //     const newRange = range.cloneRange()
                //     newRange.collapse(false)
                //     const transNode = document.createElement('w-mark-t')
                //     transNode.textContent = `(${cnRegex.exec(trans)?.[0]})`
                //     transNode.dataset.trans = `(${trans})`
                //     // TODO: insertNode performance is terrible, need to optimize
                //     newRange.insertNode(transNode)
                //     newRange.detach()
                //     // if transNode is not the last node, move cursor to next text node
                //     preEnd = segment.index + w.length
                //     if (preEnd < totalLength) {
                //         curNode = transNode.nextSibling as Text
                //     }
                // }

                let wordNode = document.createElement('span');
                wordNode.className = 'l3t-word';
                range.surroundContents(wordNode);
                wordNode.addEventListener('mouseenter', (e) => {
                    adjustCardPosition(e.target as HTMLElement)
                    toggleCard();
                });
                wordNode.addEventListener('mouseleave', (e) => {
                    toggleCard();
                })


                const trans = fullDict[originFormWord]?.t
                // avoid duplicated
                if (range.endContainer.nextSibling?.nodeName === 'W-MARK-T') {
                    continue
                }
                // insert trans tag after range
                const newRange = range.cloneRange()
                newRange.collapse(false)
                const transNode = document.createElement('w-mark-t')
                const cnRegex = /[\u4E00-\u9FA5]+/
                transNode.textContent = `(${cnRegex.exec(trans)?.[0]})`
                transNode.dataset.trans = `(${trans})`
                // TODO: insertNode performance is terrible, need to optimize
                newRange.insertNode(transNode)
                newRange.detach()
                // if transNode is not the last node, move cursor to next text node
                preEnd = segment.index + w.length
                if (preEnd < totalLength) {
                    curNode = transNode.nextSibling as Text
                }

                // const contextLength = getWordContexts(w)?.length ?? 0
                // if (contextLength > 0) {
                //     contextHL.add(range)
                // } else {
                //     unknownHL.add(range)
                // }
                //
                // toHighlightWords.push(w)
            }
        }
    }

    // if (toHighlightWords.length > 0) {
    //     autoPauseForYoutubeSubTitle(node.parentElement, toHighlightWords)
    // }
}

export function getWordContexts(word: string) {
    const originFormWord = getOriginForm(word)
    return contexts[originFormWord] ?? []
}

// async function readStorageAndHighlight() {
//     const result = await chrome.storage.local.get(['dict', StorageKey.context])
//     fullDict = result.dict || (await waitForDictPrepare())
//     dict = await getSelectedDicts(fullDict)
//
//
// }



export function init() {

    browser.storage.local.get('dict').then((result) => {
        fullDict = result.dict
        dict = fullDict
        highlight(document.body)
    })

}