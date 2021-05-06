const toArray = (obj) => {
  for (let key in obj) {
    if (typeof (obj[key]) === 'object') {
      return [key, ...toArray(obj[key])]
    } else {
      return [key, obj[key]]
    }
  }
}

const createObject = values => (values.reduce((next, value) => {
  if (next) return ({ [value]: next })
  return value
}, null))


const reverseObject = (origin) => {
  return createObject(toArray(origin))
}

module.exports = reverseObject
