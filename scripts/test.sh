#!/bin/sh
echo "****************************************************"
echo "*                     TESTS                        *"
echo "****************************************************"
echo "* Running tests on React components for Chrome popup window. 👷 "
echo "* Components can be found in src/js/popup/ directory. 📂 "
echo "* Loading..."
echo ""

mocha --require mock-local-storage test/helpers/browser.js test/*.test.jsx

echo "****************************************************"
echo "*                     /TESTS                       *"
echo "****************************************************"
