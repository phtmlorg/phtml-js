# Installing pHTML JS

[pHTML JS] runs in all Node environments, with special instructions for:

| [Node](#node) | [pHTML CLI](#phtml-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

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

## pHTML CLI

Add [pHTML CLI] to your project:

```bash
npm install phtml-cli --save-dev
```

Use [pHTML JS] in your `phtml.config.js` configuration file:

```js
const phtmlJs = require('@phtml/js');

module.exports = {
  plugins: [
    phtmlJs(/* pluginOptions */)
  ]
}
```

## Webpack

Add [pHTML Loader] to your project:

```bash
npm install phtml-loader --save-dev
```

Use [pHTML JS] in your Webpack configuration:

```js
const phtmlJs = require('@phtml/js');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'style-loader',
          { loader: 'html-loader', options: { importLoaders: 1 } },
          { loader: 'phtml-loader', options: {
            ident: 'phtml',
            plugins: () => [
              phtmlJs(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire pHTML] to your project:

```bash
npm install react-app-rewired react-app-rewire-html --save-dev
```

Use [React App Rewire pHTML] and [pHTML JS] in your
`config-overrides.js` file:

```js
const reactAppRewirePHTML = require('react-app-rewire-phtml');
const phtmlJs = require('@phtml/js');

module.exports = config => reactAppRewirePHTML(config, {
  plugins: () => [
    phtmlJs(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp pHTML] to your project:

```bash
npm install gulp-phtml --save-dev
```

Use [pHTML JS] in your Gulpfile:

```js
const phtml = require('gulp-phtml');
const phtmlJs = require('@phtml/js');

gulp.task('html', () => gulp.src('./src/*.html').pipe(
  phtml([
    phtmlJs(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [pHTML JS] in your Gruntfile:

```js
const phtmlJs = require('@phtml/js');

grunt.loadNpmTasks('grunt-phtml');

grunt.initConfig({
  phtml: {
    options: {
      use: [
       phtmlJs(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.html'
    }
  }
});
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML CLI]: https://github.com/phtmlorg/phtml-cli
[pHTML Loader]: https://github.com/phtmlorg/phtml-loader
[pHTML JS]: https://github.com/phtmlorg/phtml-js
[React App Rewire pHTML]: https://github.com/phtmlorg/react-app-rewire-phtml
[React App Rewired]: https://github.com/timarney/react-app-rewired
