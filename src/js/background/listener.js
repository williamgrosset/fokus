(() => {
  let domains = [];
  let domainsEnable = [];
  let disabled = false;

  chrome.runtime.onStartup.addListener(() => {
    domains = JSON.parse(localStorage.getItem('container'));
    // set enable/disable mode from localStorage here
  });

  chrome.runtime.onMessage.addListener((request) => {
    if (request.container) {
      domains = request.container;
    // Enable domain blocker
    } else if (request.enabled === true) {
      if (disabled) {
        domains = domainsEnable;
        disabled = false;
      }
    // Disable domain blocker
    } else if (request.enabled === false) {
      if (!disabled) {
        domainsEnable = domains;
        domains = [];
        disabled = true;
      }
    }
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        for (let i = 0; i < domains.length; i++) {
          const reDomain = new RegExp(domains[i].validDomain, 'i');
          if (reDomain.test(tabs[0].url)) {
            chrome.tabs.update(tabs[0].id, { url: 'src/html/home.html' });
            return;
          }
        }
      });
    }
  });
})();
