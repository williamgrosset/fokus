#!/bin/sh
echo "****************************************************"
echo "*                                                  *"
echo "*                     TESTS                        *"
echo "*                                                  *"
echo "****************************************************"

echo "* Running tests on React components in popup window... 👷 "
echo "* Components can be found in src/js/popup/ directory... 📂 "

mocha --require mock-local-storage test/helpers/browser.js test/*.spec.js

echo "****************************************************"
echo "*                                                  *"
echo "*                     /TESTS                       *"
echo "*                                                  *"
echo "****************************************************"
