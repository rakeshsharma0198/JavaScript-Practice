
console.log("GT 24")

const snail = function(array) {
    let answer = []
    let temp = ''
    console.log(array)

    while (array) {
        // temp = array.shift()
        // console.log(temp)
        answer = answer.concat(array.shift())
        console.log(array, " *** ", answer)
        if (array.length === 0) { 
            console.log("Vacio..............")
            return answer 
        }

        
        
        for (let x = 0; x < array.length -1; x++) {
            answer = answer.concat(array[x].pop())
        }
        console.log(array, " *** ", answer)
        if (array.length === 0) { 
            console.log("Vacio..............")
            return answer 
        }


  

        answer = answer.concat(array.pop().reverse())
        console.log(array, " *** ", answer)
        if (array.length === 0) {  
            console.log("Vacio..............")
            return answer 
        }


     
        
        console.log('Before the 2nd for: ', array.length)
        for (let y = array.length -1; y >= 0; y--) {

            console.log('Array: ', array)
            console.log('inside the 2nd for,,,  Y = ', y, '  ===  ', array[y])
            
            answer = answer.concat(array[y].shift())
        }
        console.log(array, " *** ", answer)
        console.log(" ")
        if (array.length === 0) { 
            console.log("Vacio..............")
            return answer 
        }

 

    }

    return answer
}


const array = [[1,2,3], [4,5,6], [7,8,9]]


console.log( snail(array) )