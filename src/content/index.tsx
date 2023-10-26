
import {createRoot} from "react-dom/client";
import {init} from "./highlight";
import {mouse} from "../lib/CardPosition";
import {L3tCard} from "../component/L3t-Card";

const App = () => {
    function genMarkStyle() {
        return `
        ::highlight(wh-unknown){
            color: #ff0000;
        }
        l3t-word { color: #ff0000; }
        `
    }

    init();
    mouse();

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