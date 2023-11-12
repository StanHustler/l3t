import browser from "webextension-polyfill";
import {Messages} from "../constant";
import {sendMessage} from "./port";

type DictResult = {
    word: string
    exp: string
    tag: string
}

const cache: Record<string, DictResult> = {}

export async function lookup(word: string) {
    if (cache[word]) return Promise.resolve(cache[word])

    console.log("========lookup", word)
    const html = await fetchText("https://dict.youdao.com/result?word=" + word + "&lang=en")
    const doc = new DOMParser().parseFromString(html, "text/html")

    const result : DictResult = {
        "word": word,
        "exp" : "",
        "tag" : "",
    }


    doc.querySelectorAll("li.word-exp").forEach((el) => {
        result.exp += el.textContent + "\n"
    })

    doc.querySelectorAll(".exam_type-value").forEach((el) => {
        result.tag += el.textContent + "|"
    })

    result.exp = result.exp.slice(0, -2)
    result.tag = result.tag.slice(0, -1)

    cache[word] = result
    return result
}


export async function fetchText(url: string): Promise<string> {
    const result = await sendMessage(Messages.FetchHtml, { url })
    return result ?? ''
}
