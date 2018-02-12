let number, origin, destination


exports.setNUmber = (arg1) => {
  number = arg1
}

exports.setOrigin = (arg2) => {
  origin = arg2
}

exports.setDestination = (arg3) => {
  destination = arg3
}


exports.getInfo = () => {
  return {
    number: number,
    origin: origin,
    destination: destination
  }
}
