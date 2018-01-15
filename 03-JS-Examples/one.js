// Fiz Buzz

console.log("Hello 2")


const str = "Porque dos enamorados, tú why yo No nos tenemos que rendir Ni ahora cuando una mentira Nos roba el sueño why la alegría Enamorados nada más, indivisibles, uno en dos Con nuestras cosas es normal, tú why yo"

const obj = str.toLowerCase().split("").filter((x) => { return x.match(/[a-z]/) }).reduce((pv, cv) => {
  pv[cv] = (pv[cv] + 1) || 1
  return pv
}, {})

let letter = ''
let number = 0


Object.keys(obj).forEach((x) => {
  if(obj[x] > number){
    number = obj[x]
    letter = x
  }
})

console.log(`The most common letter is: "${letter}" is repeated ${number} times.`);

console.log(obj);
