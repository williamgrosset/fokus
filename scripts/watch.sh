#!/bin/sh
echo "* Running watchify 👀 "
echo "* Popup.js will be rebundled on saved changes. ⚙️ "
watchify src/js/popup/popup.js -t babelify -o build/popup-bundle.js
