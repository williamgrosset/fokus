echo "****************************************************"
echo "*                                                  *"
echo "*                     TESTS                        *"
echo "*                                                  *"
echo "****************************************************"

echo "Running tests on React components of popup window..." 

mocha --require test/helpers/browser.js test/*.spec.js

echo "****************************************************"
echo "*                                                  *"
echo "*                     /TESTS                       *"
echo "*                                                  *"
echo "****************************************************"
