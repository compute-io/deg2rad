'use strict';

// MODULES //

var DEG2RAD = require( './number.js' );


// DEGREES-TO-RADIANS //

/**
* FUNCTION: rad2deg( out, arr, accessor )
*	Converts degrees to radians element-wise using an accessor function.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function rad2deg( out, arr, clbk ) {
	var len = arr.length,
		v, i;
	for ( i = 0; i < len; i++ ) {
		v = clbk( arr[ i ], i );
		if ( typeof v === 'number' ) {
			out[ i ] = DEG2RAD( v );
		} else {
			out[ i ] = NaN;
		}
	}
	return out;
} // end FUNCTION rad2deg()


// EXPORTS //

module.exports = rad2deg;
