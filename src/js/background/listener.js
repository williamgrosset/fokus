(function() {

    var domains = [];
    var domainsEnable = [];

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            // Add domain to domain blocker container
            if (request.validDomain) {
                domains.push(request.validDomain);
                domainsEnable = domains;
            }
            // Remove domain from domain blocker container
            if (request.index) {
                domains.splice(request.index, 1);
                domainsEnable = domains;
            }
            // Remove domain from domain blocker container (case required for 0)
            if (request.index == 0) {
                domainsEnable = domains;
                domains.splice(request.index, 1);
            }
            // Disable domain blocker
            if (request.disable) {
                var domainsDisable = [];
                domainsEnable = domains;
                domains = domainsDisable;
            }
            // Enable domain blocker
            if (request.enable) {
                domains = domainsEnable;
            }
        }
    );

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {  
        if (changeInfo.status == 'complete') {
            // Check current tab for URL replacement
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                for (var i = 0; i < domains.length; i++) {
                    var reDomain = new RegExp(domains[i], 'i');
                    if (reDomain.test(tabs[0].url)) {
                        chrome.tabs.update(tabs[0].id, {url: "src/html/home.html" });
                        return;
                    }
                }
            });

            // Check rest of tabs for URL replacement
            chrome.tabs.query({currentWindow: true}, function (tabs) {
                var currDomain = location.href;
                for (var i = 0; i < domains.length; i++) {
                    for (var k = 0; k < tabs.length; k++) {
                        var reDomain = new RegExp(domains[i], 'i');
                        if (reDomain.test(tabs[k].url)) {
                            chrome.tabs.update(tabs[k].id, {url: "src/html/home.html" });
                            return;
                        }
                    }
                }       
            });
        }
    });
})();
