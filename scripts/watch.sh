#!/bin/sh
echo "* Running watchify 👀 "
echo "* Popup.js will be rebundled on saved changes. ⚙️ "
watchify src/js/popup/popup.js -t babelify -o src/js/popup/popup-bundle.js
