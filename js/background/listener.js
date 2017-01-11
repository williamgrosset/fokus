var disabled = false;
var domains = [];
var domainsEnable = [];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.validDomain) {
            console.log('adding');
            domains.push(request.validDomain);
            domainsEnable = domains;
            var empty = []; // used for testing
            //updateFilters(domains);
        }
        if (request.index) {
            console.log('deleting');
            domains.splice(request.index, 1);
            domainsEnable = domains;
            //updateFilters(domains);
        }
        if (request.index == 0) {
            console.log('we have hit the motherload');
            domainsEnable = domains;
            domains.splice(request.index, 1);
            //updateFilters(domains);
        }
        if (request.disable) {
            console.log('disable the domains!');
            var domainsDisable = [];
            domainsEnable = domains;
            domains = domainsDisable;
        }
        if (request.enable) {
            console.log('enable the domains!');
            domains = domainsEnable;
        }
    }
);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {  
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            for (var i = 0; i < domains.length; i++) {
                var reDomain = new RegExp(domains[i], 'i');
                if (reDomain.test(tabs[0].url)) {
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

function updateFilters(urls1) {
    var urls = urls1;
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest)) {
        chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
    }

    if (urls.length == 0) {
        // we are blocking our own chrome id when we send an empty array
        return;
    } else {
    /*
    var prefix = ".*:\/\/\.*";
    var suffix = "\/.*";
    for (var i = 0; i < urls.length; i++) {
       urls[i] = urls[i].replace(prefix, '*://www.');
       urls[i] = urls[i].replace(suffix, '/*');
    }
    */
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urls}, ['blocking']);
    console.log('Domains being blocked: ');
    console.log(urls);
    }
}
