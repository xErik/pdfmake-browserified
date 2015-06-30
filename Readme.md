* Browserified version of [pdfmake](http://pdfmake.org/).
* Can be used effortlessly with e.g. [AngularJS](https://angularjs.org/).
* Default font Roboto included, thus zero configuration.
* Supports custom fonts (find prepared fonts here: [Prepared Google Fonts](https://github.com/xErik/pdfmake-fonts-google/tree/master/build/browserified)).

## Installation
```console
npm install pdfmake-browserified
```

## Node Usage

***Default Font: Roboto***
```javascript
var createPdf = require('pdfmake-browserified');
var dd = { content: "This is a sample PDF printed with pdfMake" };
createPdf(dd).open();
```


***Custom Font: Junge***

*Find prepared fonts for Node here: [Prepared Google Fonts](https://github.com/xErik/pdfmake-fonts-google/tree/master/build/browserified).*

```javascript
var createPdf = require('pdfmake-browserified');
var map = require('<path to>/browserified/ofl/junge.map.js'); // font style mapping
var data = require('<path to>/browserified/ofl/junge.js'); // font data

var defaultFont = Object.keys(map)[0];
var dd = {
	content: "This is a sample PDF printed with pdfMake",
	defaultStyle: { font: defaultFont }
};
createPdf(dd, map, data).open();
```

## Browser Usage

***Default Font: Roboto***

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
     <script>
        function openPdf() {
            var docDefinition = { content: "This is a sample PDF printed with pdfMake" };
            createPdf(docDefinition).open();
        }
     </script>
 </body>
</html>

```


***Custom Font: Junge***

*Find prepared fonts for Browser here: [Prepared Google Fonts](https://github.com/xErik/pdfmake-fonts-google/tree/master/build/script).*

```html
<!doctype html>
 <html lang='en'>
 <head>
 	<meta charset='utf-8'>
 	<title>Google Fonts with regular pdfmake</title>
 	<script src='<your path>/pdfmake-browserified.min.js'></script>
 	<script src='<your path>/ofl/junge.js'></script><!-- the font data -->
 	<script src='<your path>/ofl/junge.map.js'></script><!-- the font-style mapping -->
 </head>
 <body>
    <input type="button" onclick="openPdf()" value="Open PDF"></input>
     <script>
        function openPdf() {
            var docDefinition = {
                content: "This is a sample PDF printed with pdfMake",
                defaultStyle: { font: Object.keys(pdfMake.fonts)[0] }
            };
            createPdf(docDefinition, pdfMake.fonts, pdfMake.vfs).open();
        }
     </script>
 </body>
</html>
```

## Motivation

Providing pdfmake as an npm module, which can be `require`d.

Removing boilerplate code, that is required when one uses pdfmake with frameworks line [AngularJS](https://angularjs.org/).

## Tests

A small AngularJS example is provided in the test directory.


The commands below will build the module bundle and open a browser. The page provides buttons to check `open` and `download` capabilities manually.

```
npm install
npm start
```

## Minification for Production

During your production builds, including this module, you want to exclude this module from minification/uglification/compression, as it is already minified. The same is true for custom fonts. Both are pretty big and will slow minification/uglification/compression down.

## Comparing pdfmake-browserified and pdfmake

pdfmake-browserified can be used like the original pdfmake via `script`-tag in an HTML page. With the same method signature: `createPdf(docDefinition, fonts, vfs).open();`

**But**: It can be used via `require('pdfmake-browserify')` in Node applications, too. In Node, the method signature stays the same: `createPdf(docDefinition, fonts, vfs).open();`

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
