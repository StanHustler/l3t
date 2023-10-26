import {Card} from "antd";

export function L3tCard () {
    return (
        <Card id="l3t-card" title="aa" style={{width: "260px", position: "absolute", top:0, left: 0}}>
            <p>this is a word</p>
        </Card>
    )
}

function getCardNode() {
    // const root = document.querySelector('wh-card')?.shadowRoot
    const root = document.querySelector('l3t')
    return root?.querySelector('#l3t-card') as HTMLElement
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
