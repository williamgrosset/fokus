console.log("test123");

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://www.facebook.com/*"]
    },
        ["blocking"]
);
