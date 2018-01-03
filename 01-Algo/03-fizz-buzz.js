// /3 Fizz
// /5 Buzz
// /3 & /5 Fizz-Buzz

const fizz = (num) => {
  const data = Array(num + 1).fill('a').map((c, i) => {
    return ((i % 3 === 0) && (i % 5 === 0) ) ? `Number ${i} is Fizz-Buzz`:
     (i % 3 === 0) ? `Number ${i} is Fizz` :
     (i % 5 === 0) ? `Number ${i} is Buzz` : `Number ${i} N/A`

  })
  data.forEach((x) => { console.log(x); })
  return data
}

console.log( fizz(20) );
