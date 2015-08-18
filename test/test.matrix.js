/* global describe, it, require, beforeEach */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	deg2rad = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'matrix deg2rad', function tests() {

	var out,
		mat,
		d1,
		d2,
		i;

	d1 = new Float64Array( 25 );
	d2 = new Float64Array( 25 );
	for ( i = 0; i < d1.length; i++ ) {
		d1[ i ] = Math.random() * 360;
		d2[ i ] = d1[ i ] * Math.PI / 180;
	}

	beforeEach( function before() {
		mat = matrix( d1, [5,5], 'float64' );
		out = matrix( d2, [5,5], 'float64' );
	});

	it( 'should export a function', function test() {
		expect( deg2rad ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided unequal length matrices', function test() {
		expect( badValues ).to.throw( Error );
		function badValues() {
			deg2rad( matrix( [10,10] ), mat );
		}
	});

	it( 'should convert degrees to radians for each matrix element', function test() {
		var actual;

		actual = matrix( [5,5], 'float64' );
		actual = deg2rad( actual, mat );

		assert.deepEqual( actual.data, out.data );
	});

	it( 'should return an empty matrix if provided an empty matrix', function test() {
		var out, mat, expected;

		out = matrix( [0,0] );
		expected = matrix( [0,0] ).data;

		mat = matrix( [0,10] );
		assert.deepEqual( deg2rad( out, mat ).data, expected );

		mat = matrix( [10,0] );
		assert.deepEqual( deg2rad( out, mat ).data, expected );

		mat = matrix( [0,0] );
		assert.deepEqual( deg2rad( out, mat ).data, expected );
	});

});
