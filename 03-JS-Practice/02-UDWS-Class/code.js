console.log("classl");


function addNumbers (){
  console.log("Hello from inside the function.....");

  var data1 = document.getElementById("in1").value
  var data2 = document.getElementById("in2").value


  var total = data1 + data2

  document.getElementById("out").value = total


  console.log("The sum of the numbers is: ", total, " and is type is: ", typeof total);
}
