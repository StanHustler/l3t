import {adjustCardPosition} from "../component/L3t-Card";

export function mouse() {

    let cache: string | null = null;

    document.addEventListener('mouseover', (e) => {

        if (e.target instanceof HTMLElement && e.target.nodeName === 'L3T-WORD' && e.target.innerText !== cache) {
            // cache = e.target.innerText;
            adjustCardPosition(e.target)

        }
    })
}

