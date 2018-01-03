Linked List:

const nodeOne = {
  data: 123
}

const nodeTwo = {
  data: 456
}

nodeOne.next = nodeTwo

--------------------------------------------
      // SUM ARRAY

arr.reduce((pv, cv) => { return pv + cv }, 0)

---------------------------------
      // CREATE A MAP OBJECT

arr.reduce((pv, cv) => {
  pv[cv] = (pv[cv] + 1) || 1
  return pv
}, {})

---------------------------------
      // MY FIBONACCI

let fib = () => {
  let count = 2
  let arr = [0, 1]

  let myRecFib = (count) => {
    if(count === n + 1){ return }
    arr.push(arr[count - 2] + arr[count - 1])
    myRecFib(count + 1)
  }

  myRecFib(count)
  return arr[n]
}

---------------------------------
