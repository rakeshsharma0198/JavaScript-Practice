const flight = require('./flight')

flight.setOrigin('S.L.C.')
flight.setDestination('Las Vegas')
flight.setNUmber(458)

console.log( flight.getInfo() )
