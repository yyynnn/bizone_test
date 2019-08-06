;(function() {
  Object.setPrototypeOf =
    Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)

  function setProtoOf(obj, proto) {
    obj.__proto__ = proto
    return obj
  }

  function mixinProperties(obj, proto) {
    for (const prop in proto) {
      if (!obj.hasOwnProperty(prop)) {
        obj[prop] = proto[prop]
      }
    }
    return obj
  }
})()
