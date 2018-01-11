console.log('JavaScript: 5 \n')

const pali = (str) => {
  const prostr = str.toLowerCase().split("").filter((x) => { return x.match(/[a-z]/) })

  console.log(prostr);

  console.log(prostr.join(""))
  console.log(prostr.reverse().join(""))

  return prostr.join("") === prostr.reverse().join("")
}


// console.log( pali("abcdefgah") );
console.log( pali("Madam, I'm Adama") );
