// // ===[KITCHEN AKA BACK-END]===========================================
// const subway = (ingridient) =>{
//     console.log("Hello Im Subway..")
//     console.log("You want a sanwicht of: ", ingridient)

//     let storage = ['Ham', 'Chiken', 'MeatBalls']

//     const bag = new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if(false){
//                 resolve(`Here is your ${ingridient} sandwich`)
//             }else{
//                 reject(`Sorry we do not have ${ingridient}`)
//             }
//         }, 1000)

//     })

//     return bag
// }




// // ===[COSTUMER AKA FRONT-END]==========================================
// console.log(" ")
// let myRequest = 'Ham'

// subway(myRequest).then((res1) => {
//     console.log("This is what is inside of the Bag: ", res1)
// }).catch((err2) => {
//     console.log("This is what is inside of the Bag: ", err2)
// })



















// =================================================================
// let ingridient = 'Peperoni'
// console.log("The requested ingridient: ", ingridient)

// let storage = ['Ham', 'Chiken', 'MeatBalls']
// console.log("The storage has: ", storage)

// let doWeHaveIt = false
// console.log("Do we have the ingredient: ", doWeHaveIt)
// console.log(' ')


// for(let x = 0; x < storage.length; x++){
//     console.log("Current Index: ", x, " value of: storage[x] ", storage[x])
//     if(ingridient === storage[x]){
//         doWeHaveIt = true
//     }
// }


// console.log(' ')
// if(doWeHaveIt){
//     console.log("Yes we have it")
// }else{
//     console.log("No we do not have it")
// }