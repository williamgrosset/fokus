#!/bin/sh
browserify src/js/popup/popup.js -t babelify -o src/js/popup/popup-bundle.js
