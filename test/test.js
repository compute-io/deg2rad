/* global require, describe, it */
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

	it( 'should throw an error if `options` is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				deg2rad( [1,2,3,4,5], value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				deg2rad( [1,2,3,4,5], {'accessor': value} );
			};
		}
	});

	it( 'should throw an error if provided a copy option which is not a boolean', function test() {
		var values = [
			'5',
			5,
			function(){},
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				deg2rad( [1,2,3,4,5], {'copy': value} );
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

	it( 'should convert all values mutating input array', function test() {
		var data, actual, expected;

		data = [ 0, 45, 90, 135, 180 ];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data, {'copy': false} );

		assert.deepEqual( data, expected );
		assert.ok( actual === data );
	});

	it( 'should convert all values without mutating input array', function test() {
		var data, actual, expected;

		data = [ 0, 45, 90, 135, 180 ];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data );

		assert.deepEqual( actual, expected );
		assert.ok( actual !== data );
	});

	it( 'should convert all values using accessor function mutating input array', function test() {
		var data, actual, expected;

		data = [
			{'x':0},
			{'x':45},
			{'x':90},
			{'x':135},
			{'x':180}
		];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data, {
			'copy': false,
			'accessor': getValue
		});

		for ( var i = 0; i < data.length; i++ ) {
			assert.closeTo( data[i], expected[i], 1e-10 );
		}
		assert.ok( actual === data );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should convert all values using accessor function without mutating input array', function test() {
		var data, actual, expected;

		data = [
			{'x':0},
			{'x':45},
			{'x':90},
			{'x':135},
			{'x':180}
		];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data, {
			'accessor': getValue
		});

		for ( var i = 0; i < data.length; i++ ) {
			assert.closeTo( actual[i], expected[i], 1e-10 );
		}
		assert.ok( actual !== data );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return `null` is provided an empty array', function test() {
		assert.isNull( deg2rad( [] ) );
	});

});
