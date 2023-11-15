
import {createRoot} from "react-dom/client";
import {init} from "./highlight";
import {L3tCard} from "../pages/card/L3t-Card";

import browser from "webextension-polyfill";

const App = () => {
    function genMarkStyle() {
        return `
        ::highlight(wh-unknown){
            color: #ff0000;
        }        
        ::highlight(wh-context){
            color: #16982b;
        }
        `
    }

    init();


    return (
        <>
            <L3tCard/>
            <style>
                {`
          ${genMarkStyle()}
            `}
            </style>
        </>
    )
}

const root = document.createElement('l3t')
document.body.appendChild(root)
createRoot(root).render(<App />)