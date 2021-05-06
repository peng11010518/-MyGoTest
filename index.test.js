const reverseObject = require('./index.js')

let exampleInputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
}
let exampleOutputValue = {
  I: {
    deserve: {
      to: {
        be: 'hired'
      }
    }
  }
}

let inputABCD = {
  a: {
    b: {
      c: 'd'
    }
  }
}
let outputABCD = {
  d: {
    c: {
      b: 'a'
    }
  }
}

test('I deserve to be hired', () => {
  expect(reverseObject(exampleInputValue)).toEqual(exampleOutputValue)
})

test('d c b a', () => {
  expect(reverseObject(inputABCD)).toEqual(outputABCD)
})
