# LeadsheetJS
[![Build Status](https://travis-ci.org/dmmz/LeadsheetJS.svg?branch=master)](https://travis-ci.org/dmmz/LeadsheetJS)

A JavaScript library for online music leadsheets (visualizing, playing, editing and other features). 2015 Daniel Martín and Timotée Neullas

## How to use 

LeadsheetJS uses RequireJS, so the script tag should look like this: 
	`<script data-main="my_main.js" src="path_to/require.js"></script>`

... where `my_main.js` is a simple script that uses LeadsheetJS:
	
	require.config({
		baseUrl: "../../",
		paths: {
			jquery: 'external-libs/jquery-2.1.0.min',
			jquery_autocomplete: 'external-libs/jquery.autocomplete.min',
			vexflow: 'external-libs/vexflow-min',
			Midijs: 'external-libs/Midijs/midijs.min',
			pubsub: 'external-libs/tiny-pubsub.min',
			mustache: 'external-libs/mustache',
			text: 'external-libs/require-text',
			bootstrap: 'external-libs/bootstrap/bootstrap.min',
			underscore: 'external-libs/bower_components/underscore/underscore-min',
			jsPDF: 'external-libs/jspdf/jspdf.min',
			deepdiff: 'external-libs/bower_components/deep-diff/releases/deep-diff-0.3.3.min'
		},
		shim: {
			vexflow: {
				exports: 'Vex'
			},
			Midijs: {
				exports: 'MIDI'
			}
		}
	});

	define(function() {
			//we load constructor
			var LeadsheetJS = require('_your_path_to_external_libs_/LeadsheetJS-0.1.0.min');
			//we get a song in JSON format
			var song = require('path_to_song/song.js');
			//we set the parameters
			var params = {
				'viewer': {'HTMLElement': document.getElementById('myViewerDiv')}, // minimum parameters for viewer
				'player': {'HTMLElement': document.getElementById('myPlayerDiv')}, // minimum parameters for player
				'edition': {'notes': true}, // minimum parameters for edition (notes chords and structure are editable by default)
			};
			//we initialise LeadsheetJS
			var myLeadsheet = LeadsheetJS.init(song, params);
			// You are using LeadsheetJS
		}
	);

The first part (require.config) includes all the libraries needed for LeadsheetJS to work. The second part is the script that uses LeadsheetJS. Basically it takes a song in a specific JSON format (see json examples at [/tests/songs](/tests/songs).  And it sends it to `LeadsheetJS.init` together with the desired parameters. This is a simple example of a json song with 2 bars with chords `C | Am` and as a melody a whole rest and a whole note C/4.

	var simpleSong = {
		composer: "John ",
		title: "Whatever song",
		time: "4/4",
		changes: [{
			id: 0,
			name: "A",
			bars: [
			{
				chords: [{p: "C",
					ch: "",
					beat: 1
				}],
				melody: [{
					keys: ["B/4"],
					duration: "wr"
				}]
			},{
				chords: [{
					p: "A",
					ch: "m",
					beat: 1
				}],
				melody: [{
					keys: ["C/4"],
					duration: "W"
				}]
			}]
		}]
	};

There examples of different configurations of LeadsheetJS in http://lsdb.flow-machines.com/leadsheetJS


Important: for HTML generated by LeadsheetJS to work, the document should by specified as HTML5, so tag `<!DOCTYPE html>` goes at the top of the page.

## Get the code to work with

### Get code and dependencies

To setup the build environments, first install NodeJS and npm.

	$ git clone _this_repository_

Then, from the LeadsheetJS/ directory run:

	$ cd LeadsheetJS/
	$ npm install
	$ npm install -g grunt-cli

### Build with grunt.

	$ grunt

If you are changing some files you can use grunt watch, it will build LeadsheetJS each time a file is modified.

	$ grunt watch

To run tests in the browser, open a new tab:
 - `tests/test.html` for functionnal tests
 - `tests/viewer-test.html` for visual tests

 You can also run the tests using cli with
 	$ grunt qunit

Tests use RequireJS and Qunit, like in http://www.nathandavison.com/article/17/using-qunit-and-requirejs-to-build-modular-unit-tests

There are some example also in the `samples` folder.
