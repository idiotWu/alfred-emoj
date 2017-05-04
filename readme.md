# alfred-emoj [![Build Status](https://travis-ci.org/sindresorhus/alfred-emoj.svg?branch=master)](https://travis-ci.org/sindresorhus/alfred-emoj)

> [Alfred 3](https://www.alfredapp.com) workflow to find relevant emoji from text

<img src="screenshot-combined.png" width="895">

Uses the API from this great article on [Emoji & Deep Learning](http://getdango.com/emoji-and-deep-learning.html).<br>
Check out the [Dango app](http://getdango.com) if you want something like this on your phone.

## Revision

Added GitHub emoji support:

![GitHub Enhanced](screenshot-enhanced.png)

## Install Enhanced Version

```bash
cd "~/Library/Application Support/Alfred 3/Alfred.alfredpreferences/workflows"
git clone git@github.com:idiotWu/alfred-emoj.git
cd alfred-emoj
npm install
```

## Install

```
$ npm install --global alfred-emoj
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

In Alfred, type `emoj`, <kbd>Enter</kbd>, and some text, to find relevant emoji.

Select an emoji and press <kbd>Enter</kbd> to copy it to the clipboard.

When at the top, press <kbd>▲</kbd> and <kbd>Enter</kbd>, to copy all the emoji.


## Related

- [emoj](https://github.com/sindresorhus/emoj) - Find relevant emoji from text on the command-line
- [alfred-npms](https://github.com/sindresorhus/alfred-npms) - Search for npm packages with npms.io
- [alfred-dark-mode](https://github.com/sindresorhus/alfred-dark-mode) - Toggle the system dark mode
- [alfred-xcode](https://github.com/sindresorhus/alfred-xcode) - Open Xcode projects and workspaces
- [alfred-simple](https://github.com/sindresorhus/alfred-simple) - Simple theme
- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred workflows with ease


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
