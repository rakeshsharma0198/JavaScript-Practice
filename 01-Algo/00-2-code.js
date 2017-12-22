console.log('Algo 1')
console.log(" ");


const myFun = ( singleStrand ) => {
  console.log("The string: ")

  const subDv = (arr, num) => {
    var tempArr = []
    while (arr.length > 0) {
      tempArr.push(arr.splice(0, num))
    }
    return tempArr
  }


  const arr1 = subDv(singleStrand.split(""), 3)
  str1 = ""
  arr1.map((x) => { str1 = str1 + x.join("") + " " })
  str1 = str1.slice(0, -1)


  let arr2 = []
  let origArr = singleStrand.split("")
  arr2.push(origArr.splice(0, 1))
  arr2 = arr2.concat( subDv(origArr, 3) )
  str2 = ""
  arr2.map((x) => { str2 = str2 + x.join("") + " " })
  str2 = str2.slice(0, -1)


  let arr3 = []
  origArr = singleStrand.split("")
  arr3.push(origArr.splice(0, 2))
  arr3 = arr3.concat( subDv(origArr, 3) )

  str3 = ""
  arr3.map((x) => { str3 = str3 + x.join("") + " " })
  str3 = str3.slice(0, -1)



  return `Frame 1: ${str1}\nFrame 2: ${str2}\nFrame 3: ${str3}`
}


console.log(myFun("AGGTGACACCGCAAGCCTTATATTAGC"))
