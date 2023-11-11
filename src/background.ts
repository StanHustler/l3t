import browser from "webextension-polyfill";
import {Messages} from "./constant";

browser.runtime.onInstalled.addListener((details) => {
    console.log("Extension installed:", details);

});

browser.runtime.onConnect.addListener(async (port) => {
    if (port.name === "l3t") {
        port.onMessage.addListener(async (msg) => {
            console.log("port message received", msg)
            switch (msg.action) {
                case Messages.FetchHtml: {
                    const {url, uuid} = msg
                    const htmlRes = await fetch(url, {
                        mode: 'no-cors',
                        credentials: 'include'
                    })
                    const htmlText = await htmlRes.text()
                    port.postMessage({result: htmlText, uuid})
                    break
                }
            }
        })
    }

})
