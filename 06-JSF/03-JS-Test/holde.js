// console.clear()
// console.log("\n=====================================\n");
// // ------------------------------------------------------------
//
//
// // ------------------------------------------------------------
// console.log("\n=====================================\n");


console.log("Hello Driver");


function shouldIBeTired(dailyShedule){

  // let str = "10:15-19:20"
  // let time = 0




  let hrs = 0
  let min = 0
  let thrs = 0
  let temp = 0



  // let farr = dailyShedule.filter((x) => { return x[1] === "Drive" }).map((a) => { return a[0] })
  // let farr = dailyShedule.filter((x) => { return x[1] === "Drive" }).map((a) => { return a[0] }).map((b) => { return b.split("-").map((x) => { return x.split(":").map((z) => { return parseInt(z) }) } )
  //              .forEach((t) => {
  //
  //               console.log(t[0])
  //               console.log(t[1])
  //               console.log("  ");
  //
  //              }) })



// ["5:15", "10:15"]
 let tarr = []

 let farr = dailyShedule.filter((x) => { return x[1] === "Drive" }).map((a) => { return a[0] })
                      //  .map((z) => { return z.split("-") })
                       .map((z) => { return z.split("-") })
                       .forEach((w) => {
                          let starr = w[0].split(":").map((j) => { return parseInt(j) })
                          let enarr = w[1].split(":").map((j) => { return parseInt(j) })

                          console.log( starr )
                          console.log(enarr)
                          console.log("  ");

                          hrs = ((24 - starr[0]) - (24 - enarr[0]))
                          // if(starr[1] === enarr[1]){ min += 0 }
                          if(starr[1] < enarr[1]){ min += (enarr[1] - starr[1]) }
                          if(starr[1] > enarr[1]){ min -= (starr[1] - enarr[1]) }


                       })

   if(min > 60){
     thrs = parseInt((min / 60).toFixed(0))
     temp = min % 60
     hrs += thrs
     min = temp
   }

   if(min < 0){
     min = Math.abs(min)
     if(min > 60){
       thrs = parseInt((min / 60).toFixed(0))
       temp = min % 60
       hrs -= thrs
       min = temp
     }else {
       hrs -= 1
       min = 60 - min
     }
    }

   console.log("Hrs: ", hrs)
   console.log("Min: ", min)

   if((hrs > 9) || ( hrs = 9 && min > 0 )){
     return true
   }else {
     return false
   }



  return farr


}

// console.log( shouldIBeTired( [["5:15-10:15","Work"],  ["10:15-19:20","Drive"]] ) );
console.log( shouldIBeTired( [["8:00-9:00","Drive"], ["9:00-10","Work"]] ) );


// .split("-").map((x) => { return x.split(":").map((z) => { return parseInt(z) }) } )
//              .forEach((t) => {
//                hrs += t[0]
//                min += t[1]
//              })
