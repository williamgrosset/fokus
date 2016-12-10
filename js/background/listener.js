var disabled = false;
chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: [
            "*://www.facebook.com/*",
            "*://www.twitch.tv/*"
        ]
    },
    ["blocking"]
);
