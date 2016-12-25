var disabled = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.domain);
        var array = [];
        array.push(request.domain);
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

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: [
            "*://www.facebook.com/*",
            "*://www.twitch.tv/*",
        ]
    },
    ["blocking"]
);
