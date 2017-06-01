(() => {
  let domains = [];
  let domainsEnable = [];
  let disabled = false;

  chrome.runtime.onMessage.addListener((request) => {
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
    // Remove domain from domain blocker container
    if (request.index === 0) {
      domainsEnable = domains;
      domains.splice(request.index, 1);
    }
    // Enable domain blocker
    if (request.enable === true) {
      if (disabled) {
        domains = domainsEnable;
        disabled = false;
      }
    }
    // Disable domain blocker
    if (request.enable === false) {
      if (!disabled) {
        domainsEnable = domains;
        domains = [];
        disabled = true;
      }
    }
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
      // Check current tab for URL replacement
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        for (let i = 0; i < domains.length; i++) {
          const reDomain = new RegExp(domains[i], 'i');
          if (reDomain.test(tabs[0].url)) {
            chrome.tabs.update(tabs[0].id, { url: 'src/html/home.html' });
            return;
          }
        }
      });

      // Check rest of tabs for URL replacement
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        for (let i = 0; i < domains.length; i++) {
          for (let k = 0; k < tabs.length; k++) {
            const reDomain = new RegExp(domains[i], 'i');
            if (reDomain.test(tabs[k].url)) {
              chrome.tabs.update(tabs[k].id, { url: 'src/html/home.html' });
              return;
            }
          }
        }
      });
    }
  });
})();
