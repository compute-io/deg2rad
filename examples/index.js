'use strict';

var matrix = require( 'dstructs-matrix' ),
	deg2rad = require( './../lib' );

var data,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 360;
}
out = deg2rad( data );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
out = deg2rad( data, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': [ i, data[ i ].x ]
	};
}
out = deg2rad( data, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
data = new Int32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 360;
}
tmp = deg2rad( data );
out = '';
for ( i = 0; i < data.length; i++ ) {
	out += tmp[ i ];
	if ( i < data.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( data, [5,2], 'int32' );
out = deg2rad( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = deg2rad( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );
