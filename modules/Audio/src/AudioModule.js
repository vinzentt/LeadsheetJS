define([
	'modules/Audio/src/AudioController',
    'modules/Audio/src/AudioDrawer',
    'modules/Audio/src/AudioCursor',
    'modules/Audio/src/AudioPlayer',
    'modules/Audio/src/AudioAnimation',
    'modules/Audio/src/NotesCursorUpdater',
    'modules/Audio/src/ChordsCursorUpdater'
],function(AudioController, AudioDrawer, AudioCursor, AudioPlayer, AudioAnimation, NotesCursorUpdater, ChordsCursorUpdater){
	function AudioModule(song, params){
		params = params || {};
		var audio = new AudioController(song);
		new AudioPlayer(audio);

		if (params.draw){
			var paramsDrawer = {
	          showHalfWave: true,
	          //drawMargins: true,
	          topAudio: -120,
	          heightAudio: 75,
    	    };
    	    // useAudioCursor unless it is explicitly set to false (default is true)
    	    var useAudioCursor = params.draw.audioCursor === undefined || params.draw.audioCursor === true; 
    	    var audioAnimation = null;
			if (useAudioCursor || params.draw.notesCursor){
				var notesCursor = params.draw.notesCursor;
				var chordsCursor = params.draw.chordsCursor;
    	    	audioAnimation = new AudioAnimation();

	    	    if (notesCursor){
	    	    	var notesCursorUpdater = new NotesCursorUpdater(song.getComponent('notes'), notesCursor);
	    	    	audioAnimation.addCursor(notesCursorUpdater);
	    	    }
	    	    if (chordsCursor){
	    	    	var chordsCursorUpdater = new ChordsCursorUpdater(song, chordsCursor);
	    	    	audioAnimation.addCursor(chordsCursorUpdater);	
	    	    }
	   	    }
	    	var audioDrawer = new AudioDrawer(song, params.draw.viewer, useAudioCursor, audioAnimation, paramsDrawer);
		}

		return audio;
	}
	return AudioModule;
});