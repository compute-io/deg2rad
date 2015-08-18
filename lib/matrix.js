'use strict';

// FUNCTIONS //

var DEG2RAD = require( './number.js' ),
	matrixfun = require( 'compute-matrix-function' );


// DEGREES-TO-RADIANS //

/**
* FUNCTION: deg2rad( out, x )
*	Converts degrees to radians element-wise.
*
* @param {Matrix} out - output matrix
* @param {Matrix} x - input matrix
* @returns {Matrix} output matrix
*/
var deg2rad = matrixfun.create( DEG2RAD, 1 );


// EXPORTS //

module.exports = deg2rad;
