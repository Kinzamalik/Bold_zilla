
let N = 6;

if(N % 2){
    console.log('PRINT TWICE');
}else if(N%3){
console.log('THRICE');
}
else{
    console.log('QUAD')
}



let N;
N = prompt('please enter your number');
if (N % 2 == 0){
console.log('twice');
} else if (N % 3 == 0){
console.log('thrice');
} else if (N % 2 == 0 || N % 3 == 0) {
console.log('quad')
} else {
console.log('the number is not divisble to anything')
}


var t = [-1, -2, -3, 5, 6, 1];

var positiveArr = [];
var negativeArr = [];

t.forEach(function(item) {
  if (item < 0) {
    negativeArr.push(item);
  } else {
    positiveArr.push(item)
  }
});

console.log(positiveArr) // should output [5, 6, 1]
console.log(negativeArr)












var arr = [1, 2, -5, -10, 11, 20, -2];
let positive = 0;
let negative = 0;

var posNeg = function (e) {
if (e >= 0){
return positive + 1;
} else {
return negative + 1;
}
}


arr.forEach(posNeg);
console.log('postive numbers are ' + positive);
console.log('negative numbers are ' + negative);






