var disabled = false;
//var array = [
//    "*://www.reddit.com/*",
//];
var array = [];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('are we in addListener everytime?');
        console.log(request);
        if (request.validDomain) {
            console.log('adding');
            array.push(request.validDomain);
            updateFilters(array);
        }
        if (request.index) {
            console.log('deleting');
            array.splice(request.index, 1);
            updateFilters(array);
        }
        if (request.index == 0) {
            console.log('we have hit the motherload');
            array.splice(request.index, 1);
            updateFilters(array);
        }
    }
);
function blockRequest(details) {
    return {cancel: true};
}

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest)) {
        chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
        console.log('blockRequest');
    }
    if (urls.length == 0) {
        // we are blocking our own chrome id when we send an empty array
    }
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urls}, ['blocking']);
    console.log('Domains being blocked: ' + urls);
}
