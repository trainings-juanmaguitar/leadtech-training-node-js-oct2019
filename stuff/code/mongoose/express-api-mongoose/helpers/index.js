const removeUndefinedProps = o =>
  Object.keys(o)
    .reduce( (acc, propName) => {
      if (o[propName] !== undefined) acc[propName] = o[propName]
      return acc 
    },{}) 

module.exports = {
  removeUndefinedProps
}