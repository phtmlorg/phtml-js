# pHTML JS [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML JS] lets you transform inline JS in HTML.

```html
<script>document.addEventListener('DOMContentLoaded', () => {})</script>

<button onClick="console.log({ event })"></button>

<!-- becomes (when processed with @babel/preset-env) -->

<script>document.addEventListener('DOMContentLoaded', function () {})</script>

<button onClick="console.log({ event: event })"></button>
```

## Usage

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtml/js
```

### Node

Add [pHTML JS] to your project:

```bash
npm install @phtml/js --save-dev
```

Use [pHTML JS] to process your HTML:

```js
const phtmlJs = require('@phtml/js');

phtmlJs.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlJs = require('@phtml/js');

phtml([
  phtmlJs(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[pHTML JS] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### presets

The `plugins` option defines the plugins applied to Babel.

```js
phtmlJs({
  plugins: ['@babel/syntax-dynamic-import']
})
```

### plugins

The `presets` option defines the presets applied to Babel.

```js
phtmlJs({
  presets: [
    ['@babel/env', {
      loose: true,
      modules: false,
      targets: 'last 2 versions, not dead',
      useBuiltIns: 'entry'
    }]
  ]
})
```

### transformOptions

The `transformOptions` option defines the transform options provided to Babel.
By default, these options enable sourcemaps. You can disable them by passing in
an empty object.

```js
phtmlCss({
  transformOptions: {}
})
```

### sourceMapAttributes

The `sourceMapAttributes` option determines whether source maps will be added
to `on` attributes. These actually work, but the feature is disabled by default.

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-js.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-js
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/js.svg
[npm-url]: https://www.npmjs.com/package/@phtml/js

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML JS]: https://github.com/phtmlorg/phtml-js
