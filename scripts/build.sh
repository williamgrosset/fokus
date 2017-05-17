#!/bin/sh
browserify src/js/popup/popup.js -t babelify -o build/popup-bundle.js
