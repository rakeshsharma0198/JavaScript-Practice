// console.clear()
// console.log("\n=====================================\n");
// // ------------------------------------------------------------
//
//
// // ------------------------------------------------------------
// console.log("\n=====================================\n");


console.log("W List");

function orderWeight(strng) {
    console.log(strng);
    console.log('1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703')
    return strng.split(" ")
                // .map((x) => { return [x, x.split("").reduce((pv, cv) => { return pv += parseInt(cv) }, 0), parseInt(x)] })
                .map((x) => { return [x, x.split("").reduce((pv, cv) => { return pv += parseInt(cv) }, 0)] })
                .sort((a, b) => { return a[0][0] - b[0][0] })
                .sort((a, b) => { return a[0] - b[0] })
                .sort((a, b) => { return a[1] - b[1] })
                .map((x) => { return x[0] })
                .join(" ")

}


console.log( orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81") )

// split to array
// arry to 2 dim arr 2nd value === new sum
// sort by 2nd value
// create string from 1st strings
