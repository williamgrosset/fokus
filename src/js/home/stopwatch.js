/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

(() => {
  let timer;
  let seconds = 300;

  /*
  *  Reset counter and start button.
  */
  function resetCounter() {
    clearInterval(timer);
    seconds = 300;
    $('#stopwatchStop').hide();
    $('#stopwatchStart').show();
    $('#stopwatchReset').hide();
    $('#clock').html(seconds);
    $('#seconds').html('seconds');
  }

  /*
  *  Decrement counter and play audio file after full
  *  300 second meditation.
  */
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

  /*
  *  Begin decrementing counter and switch start button to
  *  stop.
  */
  function startCounter() {
    $('#stopwatchStart').hide();
    $('#stopwatchStop').show();
    $('#stopwatchReset').show();
    timer = setInterval(countDown, 1000);
  }

  /*
  *  Stop decrementing counter and switch stop button to
  *  start.
  */
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
