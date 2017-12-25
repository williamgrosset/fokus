(() => {
  function typeHeader() {
    $('.center-above').typed({
      strings: ['Coming soon.'],
      contentType: 'html',
      showCursor: false,
      typeSpeed: 90,
      backSpeed: 90,
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    typeHeader();
  });
})();
