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
./node_modules/.bin/eslint ./src/js/home/about.js
./node_modules/.bin/eslint ./src/js/home/quote.js
./node_modules/.bin/eslint ./src/js/home/stopwatch.js

echo "****************************************************"
echo "*                      popup/                      *"
echo "****************************************************"
./node_modules/.bin/eslint ./src/js/popup/*
./node_modules/.bin/eslint ./src/js/popup/components/*

echo "If you saw no errors being raised, you have done very well. 👍"
echo "****************************************************"
echo "*                      /LINT                       *"
echo "****************************************************"
