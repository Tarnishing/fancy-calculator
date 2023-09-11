const buttonData = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "C",
  "=",
]

const calculator = document.querySelector(".calculator")

const display = document.createElement("input")
display.className = "display"
display.type = "text"
calculator.appendChild(display)

const numberStack = []

calculator.addEventListener("click", (event) => {
  const target = event.target

  if (target.tagName === "BUTTON") {
    const value = target.value

    if (value === "=") {
      evaluateExpression(numberStack)
      numberStack.length = 0
    } else if (value === "C") {
      numberStack.length = 0
      display.value = ""
    } else {
      numberStack.push(value)
      display.value = numberStack.join(" ")
    }
  }
})

function evaluateExpression(expression) {
  const operators = { "+": 1, "-": 1, "*": 2, "/": 2 }

  const operatorStack = []
  const numberStack = []

  function performOperation() {
    const operator = operatorStack.pop()
    const operand2 = numberStack.pop()
    const operand1 = numberStack.pop()

    switch (operator) {
      case "+":
        numberStack.push(operand1 + operand2)
        break

      case "-":
        numberStack.push(operand1 - operand2)
        break

      case "*":
        numberStack.push(operand1 * operand2)
        break

      case "/":
        if (operand2 !== 0) {
          numberStack.push(operand1 / operand2)
        } else {
          display.value = "Error: division by zero"
          numberStack.length = 0
          return
        }

        break
    }
  }

  for (const token of expression) {
    if (!operators[token]) {
      numberStack.push(parseFloat(token))
    } else {
      while (
        operatorStack.length > 0 &&
        operators[operatorStack[operatorStack.length - 1]] >= operators[token]
      ) {
        performOperation()
      }
      operatorStack.push(token)
    }
  }
  while (operatorStack.length > 0) {
    performOperation()
  }
  display.value = numberStack[0]
}

const buttons = []

for (let i = 0; i < buttonData.length; i++) {
  const label = buttonData[i]
  const value = label === "C" ? "" : label

  const button = document.createElement("button")
  button.textContent = label
  button.value = value
  buttons.push(button)
}

buttons.forEach((button) => {
  calculator.appendChild(button)
})
