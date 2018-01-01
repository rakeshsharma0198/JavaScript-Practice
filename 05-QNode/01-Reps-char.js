console.log("hello world")

// Write a function that giving a character and a string, tells how many times that character is found in that string.

const oc = (chara, str) => {

  const obj = str.split("").reduce((prev, next) => {
    prev[next] = (prev[next] + 1) || 1;
    return prev
  }, {})

  return `The letter: ${chara} is found ${obj[chara]} times in the string: ${str}`

}

console.log(oc("a", "alamadrea"));
