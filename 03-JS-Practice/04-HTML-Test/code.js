// var fruit = ['apple', 'banana', 'grape']
// var animal = ['dog', 'cat', 'moose']
//
// function addidx(item, arr) {
//   arr.push(item);
//   console.log(arr);
// }
var list = []


console.log(list);
function  Alphabetize(){
  list[0] = document.getElementById('1').value
  list[1] = document.getElementById('2').value
  list[2] = document.getElementById('3').value
  console.log(list)
  var sorted = list.sort()
  document.getElementById('1').value = list[0]
  document.getElementById('2').value = list[1]
  document.getElementById('3').value = list[2]
  // return document.getElementById('Result').innerText = sorted
}
