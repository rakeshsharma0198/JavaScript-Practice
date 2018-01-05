console.log('JavaScript: 2 \n')

// Sieve of Eratosthenes
// Find all the PRIME Numbers up to a given number

const primeNums = (n) => {
  let primes =  [false, false].concat(Array(n - 2).fill(true))

  for(let base = 2; base <= Math.sqrt(n); base++){
    for(let multiple = 2; (base * multiple) <= n; multiple++){
      // console.log(base * multiple);
      primes[base * multiple] = false
    }
  }

  primes = primes.map((x, i) => { if(x){ return i } }).filter((x) => { return x !== undefined })

  return primes
}

console.log( primeNums(200) );
