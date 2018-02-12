
console.log("GT 24")

const fizz = (num) => {
  let data = new Array(num)
                .fill('a')
                .map((c, i) => { return i +1 })
                .map((x) => { return (x % 3 === 0 && x % 5 === 0) ? `The number: ${x} is Fizz-Buzz` :
                  (x % 3 === 0) ? `The number: ${x} is Fizz` :
                  (x % 5 === 0) ? `The number: ${x} is Buzz` : `The number: ${x} N/A`
                 })
  return data
}

console.log( fizz(15) )
