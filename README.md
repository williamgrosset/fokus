![alt-text](https://github.com/williamgrosset/fokus/blob/master/png/fokus_title.png 'fokus')  
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
  
*Google chrome extension to help you focus on the things that really matter.*

**NOTICE**: The chrome extension is currently not available on the chrome store and is being redesigned. These changes are **required** due to Google's new policy of having to require permissions from the user before a page redirection occurs. However, you can install it locally and still use it!

## How to use fokus
1. ~~Download the chrome extension on the Google chrome store [here]()~~ *(see notice above)*.
2. Open the chrome popup and add new domains to be blocked, e.g: `domain.com` or `www.domain.com`.
3. Toggle the chrome extension on/off by clicking on either **Enable** or **Disable** mode.
4. Enjoy your meditation breaks for increased focus and productivity.  

![](https://github.com/williamgrosset/fokus/blob/master/png/example.gif)

## How to contribute
1. Fork and clone this repository.
2. Run `nvm install` to use the required Node version.
3. Run `npm install` to install the required dependencies.
4. Create the build directory: `mkdir build`.
5. Create a branch: `git checkout -b feature-name`.
6. Complete any necessary changes or features. For bundling with watchify: `npm run watch`.
7. Make sure the linting/tests **all pass** by running `npm test`.
8. Submit a [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

## Project layout
+ Development scripts in `scripts/`
  * `build.sh/`: `npm run build`
  * `watch.sh/`: `npm run watch`
  * `lint.sh/`: `npm run lint`
  * `test.sh/`: `npm run test`
+ Photo assests in `png/`
+ JavaScript bundle in `build/` (see [`.gitignore`](https://github.com/williamgrosset/fokus/blob/master/.gitignore#L5))
+ React components in `src/js/popup/components`
+ [Enzyme](https://github.com/airbnb/enzyme) tests in `test/`
