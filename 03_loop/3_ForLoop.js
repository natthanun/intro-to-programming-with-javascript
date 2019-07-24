console.log(1);
console.log(3);
console.log(5);
console.log(7);
var index = 1;
console.log('while------');
while (index <= 10) {
  console.log(index);
  index += 2;
}

// for (initialization; condition; final-expression) {
//     // code to run when condition is true
// }
console.log('for------');
for (var index = 1; index <= 10; index = 11) {
  // code to run when condition is true
  for (var index2 = 1; index2 <= 10; index2 = 11) {
    // code to run when condition is true
    console.log(index, index2);
  }
}
