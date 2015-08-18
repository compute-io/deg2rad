'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	DEG2RAD = require( './number.js' );


// DEGREES-TO-RADIANS //

/**
* FUNCTION: deg2rad( arr, path[, sep] )
*	Converts degrees to radians element-wise and deep sets the input array.
*
* @param {Array} arr - input array
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array} input array
*/
function deg2rad( x, path, sep ) {
	var len = x.length,
		opts = {},
		dget,
		dset,
		v, i;
	if ( arguments.length > 2 ) {
		opts.sep = sep;
	}
	if ( len ) {
		dget = deepGet( path, opts );
		dset = deepSet( path, opts );
		for ( i = 0; i < len; i++ ) {
			v = dget( x[ i ] );
			if ( typeof v === 'number' ) {
				dset( x[i], DEG2RAD( v ) );
			} else {
				dset( x[i], NaN );
			}
		}
	}
	return x;
} // end FUNCTION deg2rad()


// EXPORTS //

module.exports = deg2rad;
