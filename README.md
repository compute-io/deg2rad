deg2rad
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Converts degrees to radians.


## Installation

``` bash
$ npm install compute-deg2rad
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var deg2rad = require( 'compute-deg2rad' );
```

#### deg2rad( x[, options] )

Converts degrees to radians. `x` may be either a numeric `array` or a single numeric value.

``` javascript
// Single value:
var rad = deg2rad( 90 );
// returns pi/2

// Array of values:
var degs = [ 0, 45, 90, 135, 180 ];

deg2rad( degs );
// returns [ 0, pi/4, pi/2, 3pi/4, pi ]
```

The function accepts two `options`:

*  __copy__: `boolean` indicating whether to return a new `array` containing the converted radians. Default: `true`.
*  __accessor__: accessor `function` for accessing numerical values in object `arrays`.

To mutate the input `array` (e.g. when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var degs = [ 0, 45, 90, 135, 180 ];

var values = deg2rad( degs, {
	'copy': false
});
// eturns [ 0, pi/4, pi/2, 3pi/4, pi ]

console.log( data === values );
//returns true
```

For non-numeric `arrays`, provide an accessor `function` for accessing numeric `array` values.

``` javascript
var arr = [
	{'x':0},
	{'x':45},
	{'x':90},
	{'x':135},
	{'x':180}
];

function getValue( d ) {
	return d.x;
}

var values = deg2rad( arr, {
	'accessor': getValue
});
// eturns [ 0, pi/4, pi/2, 3pi/4, pi ]
```

Notes: If provided an empty `array`, the function returns `null`.

## Examples

``` javascript
var deg2rad = require( 'compute-deg2rad' );

// Simulate some data...
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*360;
}

deg2rad( data );

console.log( data.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-deg2rad.svg
[npm-url]: https://npmjs.org/package/compute-deg2rad

[travis-image]: http://img.shields.io/travis/compute-io/deg2rad/master.svg
[travis-url]: https://travis-ci.org/compute-io/deg2rad

[coveralls-image]: https://img.shields.io/coveralls/compute-io/deg2rad/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/deg2rad?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/deg2rad.svg
[dependencies-url]: https://david-dm.org/compute-io/deg2rad

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/deg2rad.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/deg2rad

[github-issues-image]: http://img.shields.io/github/issues/compute-io/deg2rad.svg
[github-issues-url]: https://github.com/compute-io/deg2rad/issues
