import {Card} from "antd";
import "./L3t-Card.css"

export function L3tCard () {
    return (
        <Card id="l3t-card" title="aa" >
            <p>this is a word</p>
        </Card>
    )
}

function getCardNode() {
    // const root = document.querySelector('wh-card')?.shadowRoot
    const root = document.querySelector('l3t')
    return root?.querySelector('#l3t-card') as HTMLElement
}

const isCardVisible = () => {
    return getCardNode().classList.contains('card_visible')
}

export function adjustCardPosition(el: HTMLElement) {
    const cardNode = getCardNode();

    const {x: x, y: y, width: m_width, height: m_height} = el.getBoundingClientRect();
    const { x: c_x, y: c_y, width: c_width, height: c_height } = cardNode.getBoundingClientRect();

    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;

    let left = x + scrollLeft - c_width / 2 + m_width / 2
    let top = y + scrollTop - c_height

    cardNode.style.left = `${left}px`
    cardNode.style.top = `${top}px`

}

export function toggleCard() {
    if (isCardVisible()) {
        getCardNode().classList.remove('card_visible');
    }else {
        getCardNode().classList.add('card_visible');
    }
}
