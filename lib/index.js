'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number' ),
	isBoolean = require( 'validate.io-boolean-primitive' ),
	isObject = require( 'validate.io-object' ),
	isFunction = require( 'validate.io-function' );

// DEGREES-TO-RADIANS //

/**
* FUNCTION: deg2rad( x[, options] )
*	Converts degrees to radians. Note: if provided an array, the array is mutated.
*
* @param {Array|Number} x - value(s) to be converted to radians
* @param {Object} [options] - function options
* @param {Function} [options.accessor] - accessor function for accessing numeric values
* @param {Boolean} [options.copy=true] - boolean indicating whether to return a new array
* @returns {Array|Number|Null} radian value(s). If `x` is an empty `array`, returns `null`.
*/
function deg2rad( x, opts ) {
	var len,
		copy = true,
		clbk,
		out,
		i;

	if ( !isArray( x ) && !isNumber( x ) ) {
		throw new TypeError( 'deg2rad()::invalid input argument. Must provide either a single numeric value or a numeric array. Value: `' + x + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'deg2rad()::invalid input argument. Options must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'accessor' ) ) {
			clbk = opts.accessor;
			if ( !isFunction( clbk ) ) {
				throw new TypeError( 'deg2rad()::invalid option. Accessor option must be a function. Value: `' + clbk + '`.' );
			}
		}
		if ( opts.hasOwnProperty( 'copy' ) ) {
			copy = opts.copy;
			if ( !isBoolean( copy ) ) {
				throw new TypeError( 'deg2rad()::invalid option. Copy option must be a boolean primitive. Value: `' + copy + '`.' );
			}
		}
	}
	if ( !isArray( x ) ) {
		return x * Math.PI / 180;
	}

	if ( copy ) {
		out = x.slice();
	} else {
		out = x;
	}

	len = x.length;
	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			out[ i ] = clbk( out[i], i ) * Math.PI / 180;
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			out[ i ] *= Math.PI / 180;
		}
	}
	return out;
} // end FUNCTION deg2rad()


// EXPORTS //

module.exports = deg2rad;
