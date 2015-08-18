'use strict';

// MODULES //

var DEG2RAD = require( './number.js' );


// DEGREES-TO-RADIANS //

/**
* FUNCTION: rad2deg( out, arr )
*	Converts degrees to radians element-wise.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function rad2deg( out, arr ) {
	var len = arr.length,
		i;
	for ( i = 0; i < len; i++ ) {
		if ( typeof arr[ i ] === 'number' ) {
			out[ i ] = DEG2RAD( arr[ i ] );
		} else {
			out[ i ] = NaN;
		}
	}
	return out;
} // end FUNCTION rad2deg()


// EXPORTS //

module.exports = rad2deg;
