const calculatorObject = {}

const add = function (num, num2) {
  return num + num2
}

const subtract = function (num, num2) {
  return num - num2
}

const sum = function (num, num2) {
  if (Array.isArray(num) && num.length > 0) {
    return num.reduce((total, current) => total + current)
  }

  if (num == "") {
    return 0
  } else if (num2 === undefined) {
    return parseInt(num.toString())
  } else return num + num2
}

const multiply = function (num, num2) {
  if (Array.isArray(num) && num.length > 0) {
    return num.reduce((total, current) => total * current)
  }

  return num * num2
}
const power = function (num, num2) {
  return num ** num2
}

const factorial = function (num) {
  if (num === 0) {
    return 1
  } else if (num === 1) {
    return num
  }
  {
    let finalNum = 1

    for (i = num; i > 1; i--) {
      finalNum *= i
    }
    return finalNum
  }
}
