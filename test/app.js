"use strict";

var angular = require('angular');
var createPdf = require('../build/pdfmake-browserified.min.js');

angular
.module('myApp', [])
.controller('MyController',  [ '$scope', '$sce',
    function ($scope, $sce) {

		$scope.content = "This is a sample PDF printed with pdfMake";

        var map = require('../vfs-fonts/junge.map.js'); // font style mapping
        var data = require('../vfs-fonts/junge.js'); // font data
        var defaultFont = Object.keys(map)[0];

		$scope.openPdf = function() {
			var dd = { content: $scope.content, defaultStyle: { font: defaultFont } };
			createPdf(dd, map, data).open();
		};

		$scope.downloadPdf = function() {
			var dd = { content: $scope.content, defaultStyle: { font: defaultFont } };
			createPdf(dd, map, data).download();
		};
    }]
);
