//Require and Qunit working, done following  http://www.nathandavison.com/article/17/using-qunit-and-requirejs-to-build-modular-unit-tests
require.config({
  baseUrl: "../",
  paths: {
    jquery: 'external-libs/jquery-2.1.0.min',
    qunit: 'external-libs/qunit/qunit',
    vexflow_helper: 'external-libs/vexflow_test_helpers',
    vexflow: 'external-libs/vexflow-min'

  },
  shim: {
    'qunit': {
      exports: 'QUnit',
      init: function() {
        QUnit.config.autoload = false;
        QUnit.config.autostart = false;
      }
    },
    'vexflow': {
      exports: 'Vex'
    }
  }
});

define(function(require) {

  var Qunit = require('qunit');

  var testSongModel = require('modules/core/test/testSongModel');
  var testChordManager = require('modules/core/test/testChordManager');
  var testChordModel = require('modules/core/test/testChordModel');
  var testNoteManager = require('modules/core/test/testNoteManager');
  var testNoteModel = require('modules/core/test/testNoteModel');
  var testTimeSignatureModel = require('modules/core/test/testTimeSignatureModel');

  var testSongModel_CSLJson = require('modules/converters/MusicCSLJson/test/testSongModel_CSLJson');
  var testSectionModel_CSLJson = require('modules/converters/MusicCSLJson/test/testSectionModel_CSLJson');
  var testBarModel_CSLJson = require('modules/converters/MusicCSLJson/test/testBarModel_CSLJson');
  var testChordManager_CSLJson = require('modules/converters/MusicCSLJson/test/testChordManager_CSLJson');
  var testChordModel_CSLJson = require('modules/converters/MusicCSLJson/test/testChordModel_CSLJson');
  var testNoteManager_CSLJson = require('modules/converters/MusicCSLJson/test/testNoteManager_CSLJson');
  var testNoteModel_CSLJson = require('modules/converters/MusicCSLJson/test/testNoteModel_CSLJson');

  var testSongView_chordSequence = require('modules/chordSequence/test/testSongView_chordSequence');

  var testSongModel_midiCSL = require('modules/MidiCSL/test/model/testSongModel_midiCSL');
  var testNoteModel_midiCSL = require('modules/MidiCSL/test/model/testNoteModel_midiCSL');
  var testSongConverterMidi_MidiCSL = require('modules/MidiCSL/test/converters/testSongConverterMidi_MidiCSL');

  var testLSViewer = require('modules/LSViewer/test/testLSViewer');

  // Core Module
  testNoteModel.run();
  testChordModel.run();
  testNoteManager.run();
  testSongModel.run();
  testChordManager.run();
  testTimeSignatureModel.run();

  // MusicCSLJSON Module
  testSongModel_CSLJson.run();
  testSectionModel_CSLJson.run();
  testBarModel_CSLJson.run();
  testChordManager_CSLJson.run();
  testChordModel_CSLJson.run();
  testNoteManager_CSLJson.run();
  testNoteModel_CSLJson.run();

  // Chord Sequence Module
  testSongView_chordSequence.run();


  //LSViewer Module
  //console.log(Vex);
  //testLSViewer.run(Vex);

  // Midi sound model Module
  testSongModel_midiCSL.run();
  testNoteModel_midiCSL.run();

  testSongConverterMidi_MidiCSL.run();

  QUnit.load();
  QUnit.start();
});