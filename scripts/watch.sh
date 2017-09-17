#!/bin/sh
echo "* Running watchify 👀"
echo "* Popup.js will be rebundled on saved changes. ⚙️ "
watchify src/js/popup/popup.jsx -t babelify -o build/popup-bundle.jsx --extension=.jsx
