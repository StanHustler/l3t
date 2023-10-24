import browser from "webextension-polyfill";
import {WordInfoMap, WordMap} from "./constant";


let dict: WordInfoMap
let knowns: WordMap

async function readDict(): Promise<WordInfoMap> {
  const url = browser.runtime.getURL('dict.json')
  const res = await fetch(url)
  const dict = await res.text()
  return JSON.parse(dict)
}


browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);

  readDict().then(localDict => {
    dict = localDict
    browser.storage.local.set({dict: localDict}).then(r =>
        console.log('[storage] dict set up when ' + details.reason))
    })
});

readDict().then(localDict => {
  dict = localDict
  browser.storage.local.set({dict: localDict})
})
