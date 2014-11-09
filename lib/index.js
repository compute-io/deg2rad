/**
*
*	COMPUTE: deg2rad
*
*
*	DESCRIPTION:
*		- Converts degrees to radians.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// DEGREES-TO-RADIANS //

/**
* FUNCTION: deg2rad( x )
*	Converts degrees to radians. Note: if provided an array, the array is mutated.
*
* @param {Array|Number} x - value(s) to be converted to radians
* @returns {Array|Number|Null} radian value(s). If `x` is an empty `array`, returns `null`.
*/
function deg2rad( x ) {
	var isArray = Array.isArray( x ),
		len;
	if ( !isArray && ( typeof x !== 'number' || x !== x ) ) {
		throw new TypeError( 'deg2rad()::invalid input argument. Must provide either a single numeric value or a numeric array.' );
	}
	if ( !isArray ) {
		return x * Math.PI / 180;
	}
	len = x.length;
	if ( !len ) {
		return null;
	}
	for ( var i = 0; i < len; i++ ) {
		x[ i ] *= Math.PI / 180;
	}
	return x;
} // end FUNCTION deg2rad()


// EXPORTS //

module.exports = deg2rad;
