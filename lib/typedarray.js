'use strict';

// FUNCTIONS //

var DEG2RAD = require( './number.js' ),
	arrayfun = require( 'compute-typed-array-function' );


// DEGREES-TO-RADIANS //

/**
* FUNCTION: deg2rad( out, arr )
*	Converts degrees to radians element-wise.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
var deg2rad = arrayfun.create( DEG2RAD, 1 );

// EXPORTS //

module.exports = deg2rad;
