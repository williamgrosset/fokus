![alt-text](https://github.com/williamgrosset/fokus/blob/master/png/fokus_title.png 'fokus')  
  
*Google chrome extension to help you focus on the things that really matter.*

## How to use fokus
* **NOTICE**: The chrome extension is disabled and being redesigned. These changes are **required** due to Google's new policies of having to request permissions of the user each time before a page redirection occurs.
1. ~~Download the chrome extension on the Google chrome store [here]()~~ *(see notice above)*.
2. Open the chrome popup and add new domains to be blocked, e.g: `domain.com` or `www.domain.com`.
3. Toggle the chrome extension on/off by clicking on either **Enable** or **Disable** mode.
4. Enjoy your meditation breaks for increased focus and productivity.  

![](https://github.com/williamgrosset/fokus/blob/master/png/example.gif)

## Development
The [fokus](https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea?hl=en-US) chrome extension uses `eslint` to enfource conventions with the [AirBnB JavaScript style guide](https://github.com/airbnb/javascript). The following information outlines the step-by-step process on how other developers can contribute to the open source project.

### How to contribute
1. Let me know about your idea (williamhgrosset@gmail.com) - I'd love to hear from you. :relaxed:
2. Fork this repository and run `nvm install` to use the required Node version.
3. Run `npm install` to install the required dependencies.
4. Create a branch and complete any necessary changes or features. For bundling with watchify, run `npm run watch`.
5. Make sure the linting/tests **all pass** by running `npm test`.
6. Submit a [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

*This is my first time using React, so any feedback is appreciated!*

### Project layout
+ Development scripts in `scripts/`
  * `build.sh/`: `npm run build`
  * `watch.sh/`: `npm run watch`
  * `lint.sh/`: `npm run lint`
  * `test.sh/`: `npm run test`
+ Photo assests in `png/`
+ JavaScript bundle in `build/` (see [`.gitignore`](https://github.com/williamgrosset/fokus/blob/master/.gitignore#L5))
+ React components in ```src/js/popup/components```
+ React tests in ```test/``` ([Enzyme](https://github.com/airbnb/enzyme))

## Future additions
Make a pull request to add your own idea below:
+ Allow users to configure meditation timer
+ Integrate [Circle CI](https://circleci.com/) with project
+ Add new design to home page

## F.A.Q.
### Why am I making this?
I have started to notice that I subconciously go to websites that I do not actually want to be on. Individuals seek stimulus, so we happen to distract our mind when we get bored. Whether it is Facebook, Twitch, Reddit, or any other domain - when I am working, I want to be completely focused on what is currently important. We are all guilty of this, but we can fix it. 

I also really wanted to learn [React](https://facebook.github.io/react/).

### "Domain blocking has already been solved."
Not exactly - most extensions are a bit overkill with their design and functionality. I want to build something that I can easily use to increase my productivity and be able to practice meditation daily.

### Do you realize you spelt "focus" wrong?
Yes. Fokus is swedish for focus (I know, it's pretty original). :godmode:
