/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	deg2rad = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor deg2rad', function tests() {

	it( 'should export a function', function test() {
		expect( deg2rad ).to.be.a( 'function' );
	});

	it( 'should convert degrees to radians using an accessor', function test() {
		var data, actual, expected;

		data = [
			{'x':0},
			{'x':45},
			{'x':90},
			{'x':135},
			{'x':180}
		];
		actual = new Array( data.length );

		actual = deg2rad( actual, data, getValue );
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( deg2rad( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( data.length );
		actual = deg2rad( actual, data, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
