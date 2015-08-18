/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

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

	it( 'should throw an error if provided an invalid option', function test() {
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
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				deg2rad( [1,2,3], {
					'accessor': value
				});
			};
		}
	});

	it( 'should throw an error if provided an array and an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				deg2rad( [1,2,3], {
					'dtype': value
				});
			};
		}
	});

	it( 'should throw an error if provided a typed-array and an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				deg2rad( new Int8Array([1,2,3]), {
					'dtype': value
				});
			};
		}
	});

	it( 'should throw an error if provided a matrix and an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				deg2rad( matrix( [2,2] ), {
					'dtype': value
				});
			};
		}
	});

	it( 'should return NaN if the first argument is neither a number, array-like, or matrix-like', function test() {
		var values = [
			// '5', // valid as is array-like (length)
			true,
			undefined,
			null,
			// NaN, // allowed
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isnan( deg2rad( values[ i ] ) ) );
		}
	});

	it( 'should convert degrees to radians when provided a number', function test() {
		var actual;

		actual = deg2rad( 360 );
		assert.strictEqual( actual, 2 * Math.PI );

		actual = deg2rad( 90 );
		assert.strictEqual( actual, Math.PI/2 );

		actual = deg2rad( NaN );
		assert.isTrue( isnan( actual ) );
	});

	it( 'should convert degrees to radians when provided a plain array', function test() {
		var data, actual, expected;

		data = [ 0, 45, 90, 135, 180 ];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data );
		assert.notEqual( actual, data );
		assert.deepEqual( actual, expected );

		// Mutate...
		actual = deg2rad( data, {
			'copy': false
		});
		assert.strictEqual( actual, data );
		assert.deepEqual( data, expected );
	});

	it( 'should convert degrees to radians when provided a typed array', function test() {
		var data, actual, expected;

		data = new Int32Array( [ 0, 45, 90, 135, 180 ] );
		expected = new Float64Array( [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ] );

		actual = deg2rad( data );
		assert.notEqual( actual, data );
		assert.deepEqual( actual, expected );

		// Mutate:
		actual = deg2rad( data, {
			'copy': false
		});
		expected = new Int32Array( [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ] );
		assert.strictEqual( actual, data );
		assert.deepEqual( data, expected );
	});

	it( 'should convert degrees to radians and return an array of a specific type', function test() {
		var data, actual, expected;

		data = [ 0, 45, 90, 135, 180 ];
		expected = new Int8Array( [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ] );

		actual = deg2rad( data, {
			'dtype': 'int8'
		});
		assert.notEqual( actual, data );
		assert.strictEqual( actual.BYTES_PER_ELEMENT, 1 );
		assert.deepEqual( actual, expected );
	});

	it( 'should convert degrees to radians using an accessor', function test() {
		var data, actual, expected;

		data = [
			[0,0],
			[1,45],
			[2,90],
			[3,135],
			[4,180]
		];
		expected = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];

		actual = deg2rad( data, {
			'accessor': getValue
		});
		assert.notEqual( actual, data );
		assert.deepEqual( actual, expected );

		// Mutate:
		actual = deg2rad( data, {
			'accessor': getValue,
			'copy': false
		});
		assert.strictEqual( actual, data );
		assert.deepEqual( data, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

	it( 'should convert degrees to radians and deep set', function test() {
		var data, actual, expected;

		data = [
			{'x':[0,0]},
			{'x':[1,45]},
			{'x':[2,90]},
			{'x':[3,135]},
			{'x':[4,180]}
		];
		expected = [
			{'x':[0,0]},
			{'x':[1,Math.PI/4]},
			{'x':[2,Math.PI/2]},
			{'x':[3,3*Math.PI/4]},
			{'x':[4,Math.PI]}
		];

		actual = deg2rad( data, {
			'path': 'x.1'
		});
		assert.strictEqual( actual, data );
		assert.deepEqual( actual, expected );

		// Specify a path with a custom separator...
		data = [
			{'x':[0,0]},
			{'x':[1,45]},
			{'x':[2,90]},
			{'x':[3,135]},
			{'x':[4,180]}
		];

		actual = deg2rad( data, {
			'path': 'x/1',
			'sep': '/'
		});
		assert.strictEqual( actual, data );
		assert.deepEqual( actual, expected );
	});

	it( 'should convert degrees to radians when provided a matrix', function test() {
		var mat,
			out,
			d1,
			d2,
			d3,
			i;

		d1 = new Int16Array( 25 );
		d2 = new Float64Array( 25 );
		d3 = new Int16Array( 25 );
		for ( i = 0; i < d1.length; i++ ) {
			d1[ i ] = i * 10;
			d2[ i ] = i * 10 * Math.PI / 180;
			d3[ i ] = i * 10 * Math.PI / 180;
		}
		mat = matrix( d1, [5,5], 'int16' );
		out = deg2rad( mat );

		assert.deepEqual( out.data, d2 );

		// Mutate...
		out = deg2rad( mat, {
			'copy': false
		});
		assert.strictEqual( mat, out );
		assert.deepEqual( mat.data, d3 );
	});

	it( 'should convert degrees to radians and return a matrix of a specific type', function test() {
		var mat,
			out,
			d1,
			d2,
			i;

		d1 = new Int16Array( 25 );
		d2 = new Float32Array( 25 );
		for ( i = 0; i < d1.length; i++ ) {
			d1[ i ] = i * 10;
			d2[ i ] = i * 10 * Math.PI / 180;
		}
		mat = matrix( d1, [5,5], 'int16' );
		out = deg2rad( mat, {
			'dtype': 'float32'
		});

		assert.strictEqual( out.dtype, 'float32' );
		assert.deepEqual( out.data, d2 );
	});

	it( 'should return an empty data structure if provided an empty data structure', function test() {
		assert.deepEqual( deg2rad( [] ), [] );
		assert.deepEqual( deg2rad( matrix( [0,0] ) ).data, new Float64Array() );
		assert.deepEqual( deg2rad( new Int8Array() ), new Float64Array() );
	});

});
