#!/usr/bin/env bash
browserify js/popup/header.js -t babelify -o js/popup/popup-bandle.js
browserify js/popup/popup.js -t babelify -o js/popup/popup-bundle.js
