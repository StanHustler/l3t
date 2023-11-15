import "./L3t-Card.css"
import {getRangeAtPoint} from "../../content/highlight";
import {useEffect, useState} from "react";
import {lookup} from "../../lib/YoudaoDict";
import root from 'react-shadow';

import styles from "../../css/RelingoCard.css"
import { L3tIcon } from "../../lib/L3t-Icon";

export function L3tCard () {
    const [curWord, setCurWord] = useState("22")
    const [exp, setExp] = useState("22")
    const [tag, setTag] = useState("22")

    let rangeCache: Range | null = null
    document.addEventListener('mousemove', (e) => {
        const range = getRangeAtPoint(e)
        if (range) {

            if (rangeCache != range) {
                rangeCache = range
                adjustCardPosition(range)
                setCurWord(range.toString().toLowerCase())
            }

            clearTimerHideRef()
            timerShowRef = window.setTimeout(() => {
                openCard()
            }, 200)
        } else {
            timerShowRef && clearTimeout(timerShowRef)
            isCardVisible() && hidePopupDelay(500)
        }

    })


    useEffect(() => {

        // lookup(curWord).then((res) => {
        //     setExp(res.exp)
        //     setTag(res.tag)
        // })
    })

    return (
        <root.div id="shadow-root" >
            <div className="l3t-card">
                <div className="l3t-card-header">
                    <h3> {curWord} </h3>
                    <div className="btn-action">
                        <div className="btn-star">
                            <L3tIcon.heart className="card-icon" />
                        </div>
                        <div className="btn-star">
                            <L3tIcon.check_double className="card-icon" />
                        </div>
                    </div>
                </div>
                <div className="l3t-card-exp">{exp}</div>
                <div className="l3t-card-footer">
                    <div className="card-slot">
                        <L3tIcon.list_check_2 className="card-icon" />
                        More
                    </div>
                    <div className="card-slot">
                        <L3tIcon.bookmark className="card-icon" />
                        Like
                    </div>
                </div>

            </div>
            <style type={"text/css"}> {styles} </style>
        </root.div>
    )

}

function getCardNode() {
    // const root = document.querySelector('wh-card')?.shadowRoot
    const root = document.querySelector('#shadow-root')?.shadowRoot
    return root?.querySelector('div') as HTMLElement
}

const isCardVisible = () => {
    return getCardNode().classList.contains('card_visible')
}

function adjustCardPosition(r: Range) {
    const cardNode = getCardNode();

    const {x: x, y: y, width: m_width, height: m_height} = r.getBoundingClientRect();
    const { x: c_x, y: c_y, width: c_width, height: c_height } = cardNode.getBoundingClientRect();

    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;

    let left = x + scrollLeft - c_width / 2 + m_width / 2
    let top = y + scrollTop - c_height

    cardNode.style.left = `${left}px`
    cardNode.style.top = `${top}px`

}

function openCard() {
    if (!isCardVisible()) {
        getCardNode().classList.add('card_visible');
        // console.log("added")
}}


let timerHideRef: number
let timerShowRef: number

function clearTimerHideRef() {
    timerHideRef && clearTimeout(timerHideRef)
}

function hidePopupDelay(ms: number) {
    clearTimerHideRef()
    timerHideRef = window.setTimeout(() => {
        const cardNode = getCardNode()
        cardNode.classList.remove('card_visible')
        cardNode.inert = true
        // setDictHistory([])
    }, ms)
}



