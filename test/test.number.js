/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	cdf = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number cdf', function tests() {

	var	validationData = require( './fixtures/number.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}),
		alpha = validationData.alpha,
		beta = validationData.beta;

	it( 'should export a function', function test() {
		expect( cdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Inverse Gamma cumulative distribution function', function test() {
		var actual;
		for ( var i = 0; i < data.length; i++ ) {
			actual =  cdf( data[ i ], alpha, beta );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-12 );
			}
		}
	});

	it( 'should return `NaN` if provided `NaN` as input', function test() {
		assert.isTrue( isnan( cdf( NaN, alpha, beta ) ) );
	});

	it( 'should return 0 for a negative number', function test() {
		assert.strictEqual( cdf( -10, alpha, beta ), 0 );
		assert.strictEqual( cdf( -1, alpha, beta ), 0 );
		assert.strictEqual( cdf( -0.1, alpha, beta ), 0 );
	});

});
