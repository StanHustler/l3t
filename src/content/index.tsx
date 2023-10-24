import {Card} from "./Card";
import {createRoot} from "react-dom/client";

const App = () => {
    function genMarkStyle() {
        return `
        ::highlight(wh-unknown){
            color: #ff0000;
        }
        l3t-word { color: #ff0000; }
        `
    }

    return (
        <>
            <Card />
            <style>
                {`
          ${genMarkStyle()}
            `}
            </style>
        </>
    )
}

const root = document.createElement('wh-root')
document.body.appendChild(root)
createRoot(root).render(<App />)