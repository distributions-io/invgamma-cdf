options( digits = 16 )
library( jsonlite )
library( pscl )

alpha = 0.8
beta = 0.4
x = c( 1, 2.5, 5, 10, 20 )
y = pigamma( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
