/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	deg2rad = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number deg2rad', function tests() {

	it( 'should export a function', function test() {
		expect( deg2rad ).to.be.a( 'function' );
	});

	it( 'should convert degrees to radians', function test() {
		var actual;

		actual = deg2rad( 360 )
		assert.strictEqual( actual, 2 * Math.PI );

		actual = deg2rad( 90 );
		assert.strictEqual( actual, Math.PI/2 );

		actual = deg2rad( 30 );
		assert.strictEqual( actual, Math.PI/6 );

		actual = deg2rad( -270 );
		assert.strictEqual( actual, -3*Math.PI/ 2 );
	});

});
