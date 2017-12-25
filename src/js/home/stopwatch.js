(() => {
  let timer;
  let seconds = 300;

  function resetCounter() {
    clearInterval(timer);
    seconds = 300;
    $('#stopwatchStop').hide();
    $('#stopwatchStart').show();
    $('#stopwatchReset').hide();
    $('#clock').html(seconds);
    $('#seconds').html('seconds');
  }

  function countDown() {
    seconds -= 1;
    $('#clock').html(seconds);
    if (seconds === 1) {
      $('#seconds').html('second');
    }
    if (seconds === 0) {
      document.getElementById('audio').play();
      resetCounter();
    }
  }

  function startCounter() {
    $('#stopwatchStart').hide();
    $('#stopwatchStop').show();
    $('#stopwatchReset').show();
    timer = setInterval(countDown, 1000);
  }

  function stopCounter() {
    clearInterval(timer);
    $('#stopwatchStop').hide();
    $('#stopwatchStart').show();
  }

  $('#stopwatchStop').hide();
  $('#stopwatchReset').hide();
  $('#stopwatchStart').bind('click', startCounter);
  $('#stopwatchStop').bind('click', stopCounter);
  $('#stopwatchReset').bind('click', resetCounter);
})();
