function main(inputString) {
  let stack = []

  let openParentheses = {
    "[": "]",
    "(": ")",
    "{": "}"
  }

  let closeParentheses = {
    "]": true,
    ")": true,
    "}": true
  }

  for (const eachLetter of inputString) {
    
    // Check letter is one of the Open Parentheses like (, {, [.
    if (openParentheses[eachLetter]) {

      // Push its pair, Close Parentheses, into array variable.
      stack.push(openParentheses[eachLetter])

    // Check letter is one of the Close Parentheses like ), }, ]
    // and also check last item in our array,
    // if it isn't match will be wrong input.
    } else if (closeParentheses[eachLetter] && stack.pop() !== eachLetter) {

      // so you can return false value
      // Example Case: input "{)" => "{" is not pair parentheses of ")" => wrong!
      return false

    }
  }

  // Check the last one condition.
  // if array isn't be zero, it means still have a non-matching parentheses,
  // it will be wrong too
  // Example case: input "{{{{{{" => could not find their pair => wrong!
  return stack.length === 0
}

module.exports = {
  main
};