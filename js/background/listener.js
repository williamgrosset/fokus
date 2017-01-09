var disabled = false;
var domains = [];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('are we in addListener everytime?');
        console.log(request);
        if (request.validDomain) {
            console.log('adding');
            domains.push(request.validDomain);
            var empty = []; // used for testing
            //updateFilters(domains);
        }
        if (request.index) {
            console.log('deleting');
            domains.splice(request.index, 1);
            //updateFilters(domains);
        }
        if (request.index == 0) {
            console.log('we have hit the motherload');
            domains.splice(request.index, 1);
            //updateFilters(domains);
        }
    }
);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {  
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({}, function (tabs) {
            var currDomain = location.href;
            console.log('current domain: ');
            console.log(currDomain);
            console.log(tabs);
            // loop through array
            // check if current domain matches URL (using regular expressions) in array
            // if we get a match, replace that shit
            for (var i = 0; i < tabs.length; i++) {
                for (var k = 0; k < domains.length; k++) {
                    var reDomain = new RegExp(domains[k], 'i');
                    if (reDomain.test(tabs[i].url)) {
                        console.log('we matched'); 
                        chrome.tabs.update(tabs.id, {url: "html/home.html" });
                        console.log(tabs[i].url);
                        //location.replace(chrome.extension.getURL("html/home.html"));
                    }
                }
            }       
        });
    }
});

function blockRequest(details) {
    return {cancel: true};
}

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest)) {
        chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
    }

    if (urls.length == 0) {
        // we are blocking our own chrome id when we send an empty array
        return;
    } else {
        chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urls}, ['blocking']);
        console.log('Domains being blocked: ');
        console.log(urls);
    }
}

/*
function pageRedirect() {
    var currDomain = location.href;
    console.log('current domain: ');
    console.log(currDomain);
    console.log('we in the content script boyssss');
    console.log(request.array);
    chrome.tabs.query({}, function(tabs){
        // loop through array
        // check if current domain matches URL (using regular expressions) in array
        // if we get a match, replace that shit
        for (var i = 0; i < tabs.length; i++) {
            var reDomain = new RegExp(tabs[i], 'i');
            reDomain
            console.log('matched'); 
            //location.replace(chrome.extension.getURL("html/home.html"));
        }       
    }
}   
*/
