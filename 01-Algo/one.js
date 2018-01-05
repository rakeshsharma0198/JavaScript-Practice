console.log('JavaScript: 3 \n')


const myFib = (num) => {
  let current = 2
  const sequence = [0, 1]

  const recFun = (current) => {
    if(current === num + 1) { return }
    sequence.push( sequence[current - 1] + sequence[current - 2] )
    recFun(current + 1)
  }

  recFun(current)
  return sequence
}



console.log( myFib(10) );
