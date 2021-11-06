let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`)
})


//chrome.runtime : API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle
//onInstalled : Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.