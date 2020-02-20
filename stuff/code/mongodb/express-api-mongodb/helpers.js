const fromBoolStringToBoolean = boolString => {
  if (boolString === "true") return true
  if (boolString === "false") return false
}

module.exports = {
  fromBoolStringToBoolean
}

