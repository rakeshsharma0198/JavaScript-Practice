
// console.log("Hello from here...");

const myPal = (str) => {
  console.log(str)
  const temp = str.split("")
                  .reverse()
                  .join("")

  return ( str === temp ) ? true : false

  console.log(temp);

}

console.log( myPal("assa") )
