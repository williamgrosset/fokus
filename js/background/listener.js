var disabled = false;
var array = [
    "*://www.reddit.com/*",
];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('listiner.js: ' + request.validDomain);
        array.push(request.validDomain);
        updateFilters(array);
    }
);
function blockRequest(details) {
    return {cancel: true};
}

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
        chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urls}, ['blocking']);
    console.log('Added domain to blocker: ' + urls);
}
