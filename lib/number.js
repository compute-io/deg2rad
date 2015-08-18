'use strict';

/**
* FUNCTION deg2rad( x )
*	Converts degrees to radians.
*
* @param {Number} x - value to be converted to radian
* @returns {Number} radian value
*/
function deg2rad( x ) {
	return x * Math.PI / 180;
} // end FUNCTION deg2rad()


// EXPORTS //

module.exports = deg2rad;
