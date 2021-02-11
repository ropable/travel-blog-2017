jQuery( document ).ready(function( $ ) {
	
    var windowsize = $( window ).width();
	
	if ( windowsize > 800 ) {
    	$( '.entry-header' ).stick_in_parent();

		// If new posts have been added to the page
	    $( document.body ).on( 'post-load', function () {
	        $( '.entry-header' ).stick_in_parent();
	    });
    }

    // Window Resized
    $( window ).on( 'resize', function() {
		windowsize = $( window ).width();

		if ( windowsize > 800 ) {
		    $( '.entry-header' ).stick_in_parent();

			// If new posts have been added to the page
		    $( document.body ).on( 'post-load', function () {
		        $( '.entry-header' ).stick_in_parent();
		    });
	    } else {
	    	// remove sticky image
	    	$( '.entry-header' ).trigger( 'sticky_kit:detach' );
	    }
	    
	});



});
/*!
* AerWebCopy Engine [version 6.3.0]
* Copyright Aeroson Systems & Co.
* File mirrored from https://www.ropable.com/travel/core/assets/2e60dea61a/js/main.js
* At UTC time: 2021-02-11 03:14:13.681084
*/
