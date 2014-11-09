'use strict';

var deg2rad = require( './../lib' );

// Simulate some data...
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*360;
}

deg2rad( data );

console.log( data.join( '\n' ) );
