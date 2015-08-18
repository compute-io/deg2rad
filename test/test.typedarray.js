/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	deg2rad = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array sqrt', function tests() {

	it( 'should export a function', function test() {
		expect( deg2rad ).to.be.a( 'function' );
	});

	it( 'should convert degrees to radians', function test() {
		var data, actual, expected;

		data = new Int32Array( [ 0, 45, 90, 135, 180 ] );
		actual = new Float64Array( data.length );

		actual = deg2rad( actual, data );
		expected = new Float64Array( [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ] );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( deg2rad( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
