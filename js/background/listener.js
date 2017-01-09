var disabled = false;
var domains = [];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
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
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            for (var i = 0; i < domains.length; i++) {
                var reDomain = new RegExp(domains[i], 'i');
                if (reDomain.test(tabs[0].url)) {
                    console.log('WE GOT THE FIRST ONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'); 
                    chrome.tabs.update(tabs[0].id, {url: "html/home.html" });
                    return;
                }
            }
        });
        chrome.tabs.query({currentWindow: true}, function (tabs) {
            var currDomain = location.href;
            console.log('current domain: ');
            console.log(currDomain);
            console.log(tabs);
            for (var i = 0; i < domains.length; i++) {
                for (var k = 0; k < tabs.length; k++) {
                    var reDomain = new RegExp(domains[i], 'i');
                    if (reDomain.test(tabs[k].url)) {
                        console.log('we matched'); 
                        chrome.tabs.update(tabs[k].id, {url: "html/home.html" });
                        return;
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
