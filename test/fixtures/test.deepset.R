options( digits = 16 )
library( jsonlite )
library( pscl )

alpha = 1
beta = 14
x = seq( 0.5, 1000, 0.5 )
y = pigamma( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
