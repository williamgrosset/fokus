(() => {
  let domains = [];
  let toggle = true;

  chrome.runtime.onStartup.addListener(() => {
    domains = JSON.parse(localStorage.getItem('container'));
    toggle = localStorage.getItem('fokus-toggle') === 'enable' || false;
  });

  chrome.runtime.onMessage.addListener((request) => {
    if (request.container) {
      domains = request.container;
    } else if (request.toggle === true) {
      toggle = true;
    } else if (request.toggle === false) {
      toggle = false;
    }
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (toggle === true && changeInfo.status === 'complete') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        for (const domain of domains) {
          const reDomain = new RegExp(domain.validDomain, 'i');
          if (reDomain.test(tabs[0].url)) {
            chrome.tabs.update(tabs[0].id, { url: 'src/html/home.html' });
            return;
          }
        }
      });
    }
  });
})();
