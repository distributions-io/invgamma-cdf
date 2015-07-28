'use strict';

// MODULES //

var gammainc = require( 'compute-gammainc' );


// CDF //

/**
* FUNCTION: cdf( x, alpha, beta )
*	Evaluates the cumulative distribution function (CDF) for a Inverse Gamma distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, alpha, beta ) {
	if ( x <= 0 ) {
		return 0;
	}
	return gammainc( beta / x, alpha, {
		'tail': 'upper'
	});
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
