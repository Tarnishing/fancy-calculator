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
  "FUN",
]

const buttons = []

for (let i = 0; i < buttonData.length; i++) {
  const label = buttonData[i]
  const value = label === "C" ? "" : label

  const button = document.createElement("button")
  button.textContent = label
  button.value = value
  buttons.push(button)
}

const calculator = document.querySelector(".calculator")
buttons.forEach((button) => {
  calculator.appendChild(button)
})
