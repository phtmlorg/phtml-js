# Installing pHTML JS

[pHTML JS] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML JS] to your project:

```bash
npm install @phtmlorg/js --save-dev
```

Use [pHTML JS] to process your HTML:

```js
const phtmlJs = require('@phtmlorg/js')

phtmlJs.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlJs = require('@phtmlorg/js')

phtml([
  phtmlJs(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/js
```

Alternatively, add [pHTML JS] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/js', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML JS] to your Eleventy project:

```sh
npm install @phtmlorg/js @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML JS] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlJs = require('@phtmlorg/js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlJs(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML JS] to your project:

```bash
npm install @phtmlorg/js gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML JS] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlJs = require('@phtmlorg/js')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlJs(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML JS] in your Gruntfile:

```js
const phtmlJs = require('@phtmlorg/js')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlJs(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML JS]: https://github.com/phtmlorg/phtml-js
