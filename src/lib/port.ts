import browser from "webextension-polyfill";
import {uuidv4} from "./utils";
import {Messages} from "../constant";

let messagePort: browser.Runtime.Port

function connectPort() {

    messagePort = browser.runtime.connect({ name: 'l3t' })
    console.log("connectPort" + messagePort.name)
    messagePort.onDisconnect.addListener(() => {
        connectPort()
    })
}

connectPort()

export function getMessagePort() {
    return messagePort
}


export async function sendMessage(action: Messages, data: object): Promise<any> {
    console.log("sendMessage "+action)
    const port = getMessagePort()
    const uuid = uuidv4()

    return new Promise((resolve, _reject) => {
        const messageHandler = (msg: any) => {
            console.log(uuid + " " + msg.uuid)
            if (msg.uuid === uuid) {
                console.log("sendMessagepromise"+action)
                resolve(msg.result)
                port.onMessage.removeListener(messageHandler)
            }
        }

        port.postMessage({ action: action, ...data, uuid })
        port.onMessage.addListener(messageHandler)
    })
}
