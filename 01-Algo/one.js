console.log('JavaScript: 4 \n')

const orgDups = (arr) => {

  let answer = []

  const objHold = arr.reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})

  for(z in objHold){
    answer.push(Array(objHold[z]).fill(parseInt(z)))
  }

  answer = answer.sort((a, b) => { return a.length - b.length })

  let scidx = 0
  let ln = 1
  let second = [[]]

  for(let x = 0; x < answer.length; x++){
    if(answer[x].length === ln){ second[scidx].push(answer[x]) }
    else {
      second.push([answer[x]])
      scidx = scidx + 1
      ln = ln + 1
      // second[scidx].push(x)
    }
  }

  for(let x = 0; x < second.length; x++){
    second[x].reverse()
  }

  second = second.reverse()

  let newArr = []
  for(let x = 0; x < second.length; x++){
    newArr = newArr.concat(second[x])
  }

  return newArr
}

console.log( orgDups([3, 2, 6, 2, 1, 3]) );
