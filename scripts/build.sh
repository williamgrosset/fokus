#!/bin/sh
browserify src/js/popup/popup.jsx -t babelify -o build/popup-bundle.jsx --extenstion=.react.jsx
