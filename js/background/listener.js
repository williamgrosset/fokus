var disabled = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.greeting);
    }
);

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: [
            "*://www.facebook.com/*",
            "*://www.twitch.tv/*",
            "*://www.youtube.com/*"
        ]
    },
    ["blocking"]
);
