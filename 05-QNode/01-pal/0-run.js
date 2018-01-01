console.log("Run 2");

// 1225

// create a function that transform from number to string

const translation = (num) => {
  const kobj = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }
  let str = ''

  num = (num + "a").split("")
  num.pop()
  num.map((c) => { str = str + kobj[c] })

  return str
}

const num = 1225
console.log(translation(num))
