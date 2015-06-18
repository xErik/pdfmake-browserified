## Synopsis

Browserified version of [pdfmake 0.1.18](http://pdfmake.org/), font [Roboto](https://www.google.com/fonts/specimen/Roboto) included and set as default font.
Zero configuration.

## Restrictions

With the goal in mind to simplify its usage, this module is bound to pdfmake@0.1.18. Shortly, I will provide a more generic module, which will not be so simple to use.

## Code Example

### Console
```console
npm install pdfmake-browserified-0.1.18
```

### Javascript
```javascript
var content = { content: 'This is a sample PDF printed with pdfMake' };

var createPdf = require('pdfmake-browserified-0.1.18');
createPdf(content).open(); // immediately opens new tab with PDF in browser
createPdf(content).download(); // immediately downloads PDF in browser
```

## Motivation

1. Removing boilerplate code, that is required when one uses pdfmake with frameworks line AngularJS.
2. Providing pdfmake as an npm module, simplyfying its usage.

Usually, pdfmake is used by inlcuding two Javascript files via `<script>` tags. Using a framework like AngularJS, the provided script-functions are accessed via the `$window` instance. Instead of using the usual `require('pdfmake');`

## Installation

```
npm install pdfmake-browserified-0.1.18
```

## API Reference

The module exposes this function:
```javascript
/**
* The parameters fonts and vfs may be undefined/null.
* Calling function(docDefinition) will result in using the included default font Roboto.
*/
module.exports = function(docDefinition, fonts, vfs) {
	return new Document(docDefinition, fonts, vfs);
}
```

## Tests

This command wil build the module bundle and open a browser. The page provides buttons to check `open`, `download` and `iFrame` capabilities manually. Note, that the `print` functionality appears to be broken (in pdfmake?).
```
npm install
npm start
```

##Notes

### Using module in HTML
Optionally, the module may be used in HTML directly. Below are given snippets, calling the module. For more information check out the file `test/index.html`.
```HTML
<!-- provides the function "createPdf" in a browser -->
<script src="bundle.js" type="text/javascript"></script>

<!-- helper functions, invoked by buttons -->
<script type="text/javascript">
openPdf = function(content) {
	// content: 'This is a sample PDF printed with pdfMake'
	var dd = { content: content };
	createPdf(dd).open();
}

printPdf = function(content) {
	// content: 'This is a sample PDF printed with pdfMake'
	var dd = { content: content };
	createPdf(dd).print();
}

downloadPdf = function(content) {
	// content: 'This is a sample PDF printed with pdfMake'
	var dd = { content: content };
	createPdf(dd).download();
}

iframePdf = function(content) {
	var dd = { content: content };
	createPdf(dd).getDataUrl(function (result) {
		document.getElementById('theIFrame').setAttribute('src', result);
	});
}
</script>
```

## Contributors

NPM: [**pdfmake-browserified-0.1.18**](https://www.npmjs.com/package/pdfmake-browserified-0.1.18)

Github: [**pdfmake-browserified**](https://github.com/xErik/pdfmake-browserified)

### Other Projects

[**pdfmake** MIT License](http://pdfmake.org/)

[**Roboto** Apache License](https://www.google.com/fonts/specimen/Roboto)

## Note

I did this for fun. Contributions from people with a more solid node background are welcome! I wonder if this module works for anyone else, but me.

## License

MIT
