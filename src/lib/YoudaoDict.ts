import browser from "webextension-polyfill";
import {Messages} from "../constant";
import {sendMessage} from "./port";

export async function lookup() {

    return await fetchText("https://dict.youdao.com/result?word=word&lang=en")

}

export async function fetchText(url: string): Promise<string> {
    const result = await sendMessage(Messages.FetchHtml, { url })
    return result ?? ''
}
