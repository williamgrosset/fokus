![alt-text](https://github.com/williamgrosset/fokus/blob/master/png/fokus_title.png "fokus")  
  
*Google chrome extension to help you focus on the things that really matter.*

## How to use fokus
1. Download the chrome extension on the Google chrome store [here](https://chrome.google.com/webstore/detail/fokus/kapnmpfkldbacoamceiggkcoaepfgiea?hl=en-US).
2. Open the chrome popup and add new domains to be blocked, e.g:`domain.com` or `www.domain.com`.
3. Toggle the chrome extension on/off by clicking on either **Enable** or **Disable** mode.
4. Enjoy your meditation breaks for increased focus and productivity.  

![](https://github.com/williamgrosset/fokus/blob/master/png/example.gif)

## Development
...

### How to contribute
1. Let me know about your idea (williamhgrosset@gmail.com) - I'd love to hear from you. :relaxed:
2. Fork this repository and run `nvm install` to use the required Node version.
3. Run ```npm i``` to install the required dependencies.
4. Create a branch and complete any necessary changes or features. For bundling with watchify, run ```npm run watch```.
5. Make sure the linting/tests **all pass** by running ```npm test```.
6. Submit a [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

*This is my first time using React, so any feedback is appreciated!*

### Project layout
+ Build and test scripts in ```scripts/```
+ Photo assests in ```png/```
+ React components in ```src/js/popup/```
+ Tests in ```test/``` ([Enzyme](https://github.com/airbnb/enzyme))

## Future additions
+ Allow users to configure meditation timer
+ (Make a pull request to add your own idea!)

## F.A.Q.
### Why am I making this?
I have started to notice that I subconciously go to websites that I do not actually want to be on. Individuals seek stimulus, so we happen to distract our mind when we get bored. Whether it is Facebook, Twitch, Reddit, or any other domain - when I am working, I want to be completely focused on what is currently important. We are all guilty of this, but we can fix it. 

I also really wanted to learn [React](https://facebook.github.io/react/).

### "Domain blocking has already been solved."
Not exactly. Most extensions are a bit overkill with their design and functionality. I want to build something that I can easily use everyday and be able to practice meditation when I need it the most.

### Do you realize you spelt "focus" wrong?
Yes. Fokus is swedish for focus (I know, it's pretty original). :godmode:
