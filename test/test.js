'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	deg2rad = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-deg2rad', function tests() {

	it( 'should export a function', function test() {
		expect( deg2rad ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array or numeric value', function test(){
		var values = [
			'5',
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				deg2rad( value  );
			};
		}
	});

	it( 'should convert degrees to radians', function test() {
		var actual;

		actual = deg2rad( 90 );
		assert.strictEqual( actual, Math.PI/2 );

		actual = deg2rad( 30 );
		assert.strictEqual( actual, Math.PI/6 );

		actual = deg2rad( -270 );
		assert.strictEqual( actual, -3*Math.PI/ 2 );
	});

	it( 'should convert all values in an array', function test() {
		var data, actual, expected;

		data = [ 0, 45, 90, 135, 180 ];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data );

		assert.deepEqual( data, expected );
	});

	it( 'should return `null` is provided an empty array', function test() {
		assert.isNull( deg2rad( [] ) );
	});

});
