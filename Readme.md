
## Synopsis

Browserified version of [pdfmake](http://pdfmake.org/).

Supports both *require()* and the usual pdfmake *script*-tag.

Default font Roboto included, thus zero configuration.

Supports custom fonts.

Plenty of custom fonts, for usual and browserified pdfmake, can be found here: [Google Fonts](https://github.com/xErik/pdfmake-fonts-google/tree/master/build).

## Installation
```console
npm install pdfmake-browserified
```

## Usage

This module may be used in four ways, which will be detailed below:

Via `require('pdfmake-browserified')`

* Browserified with provided default font

* Browserified with custom font

Via `<script src='pdfmake-browserified.min.js'></script>`

* Script-tag with provided default font

* Script-tag with custom font

### Browserified pdfmake (AngularJS, ...)

#### Default Font: Roboto

```javascript
var createPdf = require('pdfmake-browserified');

var dd = {
	content: "This is a sample PDF printed with pdfMake",
	styles: {
		/* your styles */
	}
};

createPdf(dd).open();
```

#### Custom Font: Junge

**Note**: Prepared custom fonts can be found at [browserified pdfmake-fonts-google](https://github.com/xErik/pdfmake-fonts-google/tree/master/build/browserified).

```javascript
var createPdf = require('pdfmake-browserified');

var map = require('<path to>/browserified/ofl/junge.map.js'); // font style mapping
var data = require('<path to>/browserified/ofl/junge.js'); // font data
var defaultFont = Object.keys(map)[0];

var dd = {
	content: "This is a sample PDF printed with pdfMake",
	styles: {
		/* your styles */
	},
	defaultStyle: {
		font: defaultFont // important, don't forget to set!
	}

};

createPdf(dd, map, data).open();
```

### Regular pdfmake

#### Default font: Roboto

```html
<!doctype html>
 <html lang='en'>
 <head>
 	<meta charset='utf-8'>
 	<title>Google Fonts with regular pdfmake</title>
 	<script src='<your path>/pdfmake-browserified.min.js'></script>
 </head>
 <body>
    <input type="button" onclick="openPdf()" value="Open PDF"></input>
     <script type="">
        function openPdf() {
            var docDefinition = {
                content: "This is a sample PDF printed with pdfMake"
            };
            createPdf(docDefinition).open();
        }
     </script>
 </body>
</html>

```


####  Custom font: Junge

**Note**: Prepared custom fonts can be found at [scriptified pdfmake-fonts-google](https://github.com/xErik/pdfmake-fonts-google/tree/master/build/script).

```html
<!doctype html>
 <html lang='en'>
 <head>
 	<meta charset='utf-8'>
 	<title>Google Fonts with regular pdfmake</title>
 	<script src='<your path>/pdfmake-browserified.min.js'></script>
 	<script src='<your path>/script/ofl/junge.js'></script><!-- the font data -->
 	<script src='<your path>/script/ofl/junge.map.js'></script><!-- the font-style mapping -->
 </head>
 <body>
    <input type="button" onclick="openPdf()" value="Open PDF"></input>
     <script type="">
        /* Do not forget to set the defaultStyle to the font name you included above */
        function openPdf() {
            var docDefinition = {
                content: "This is a sample PDF printed with pdfMake",
                defaultStyle: {
            		font: Object.keys(pdfMake.fonts)[0]
            	}
            };
            createPdf(docDefinition, pdfMake.fonts, pdfMake.vfs).open();
        }
     </script>
 </body>
</html>
```

## Motivation

Providing pdfmake as an npm module, which can be `require`d.

Removing boilerplate code, that is required when one uses pdfmake with frameworks line AngularJS.

## Tests

A small AngularJS example is provided in the test directory.


The commands below will build the module bundle and open a browser. The page provides buttons to check `open` and `download` capabilities manually.

```
npm install
npm start
```

## Minification

During your production builds, including this module, you want to exclude this module from minification/uglification/compression, as it is already minified. The same is true for custom fonts. Both are pretty big and will slow minification/uglification/compression down.

## Contributors

xErik

### Other Projects

[**NPM pdfmake-browserified** MIT License](https://www.npmjs.com/package/pdfmake-browserified)

[**GIT pdfmake-browserified** MIT License](https://github.com/xErik/pdfmake-browserified)

[**pdfmake** MIT License](http://pdfmake.org/)

[**Roboto** Apache License](https://www.google.com/fonts/specimen/Roboto)

[**Junge** OFL License](https://www.google.com/fonts/specimen/Junge)

## Note

I did this for fun. Contributions from people with a more solid node background are welcome!

## License

MIT
