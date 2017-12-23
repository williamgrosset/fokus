#!/bin/sh
echo "****************************************************"
echo "*                      LINT                        *"
echo "****************************************************"
echo "* Running eslint. 🔩"
echo "* Loading... 🔮"
echo ""

echo "****************************************************"
echo "*                   background/                    *"
echo "****************************************************"
./node_modules/.bin/eslint ./src/js/background/listener.js

echo "****************************************************"
echo "*                      home/                       *"
echo "****************************************************"
./node_modules/.bin/eslint ./src/js/home/quote.js
./node_modules/.bin/eslint ./src/js/home/stopwatch.js

echo "****************************************************"
echo "*                      popup/                      *"
echo "****************************************************"
./node_modules/.bin/eslint ./src/js/popup/*
./node_modules/.bin/eslint ./src/js/popup/components/*

echo "****************************************************"
echo "*                      /LINT                       *"
echo "****************************************************"
echo "If you saw no errors or warnings, you have done very well."
