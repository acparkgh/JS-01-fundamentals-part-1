// console.log(40 + 8 + 23 - 10);

// if (js === 'amazing') alert("JavaScript is Fun!");
/*  multi-line comments

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

*/

// const dolphinsAvg = (96 + 108 + 89) / 3;
// const koalasAvg = (88 + 91 + 110) / 3;

// const dolphinsAvg = (97 + 112 + 101) / 3;
// const koalasAvg = (109 + 95 + 123) / 3;

// const dolphinsAvg = (97 + 112 + 101) / 3;
// const koalasAvg = (109 + 95 + 106) / 3;

const dolphinsAvg = (97 + 101 + 101) / 3;
const koalasAvg = (109 + 84 + 106) / 3;

console.log(dolphinsAvg, koalasAvg);

if (dolphinsAvg > koalasAvg) {
  console.log(`the winner is Dolphins`);
} else if (dolphinsAvg < koalasAvg) {
  console.log(`the winner is Koalas`);
} else {
  console.log(`it's tie`);
};

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log('the winner is Dolphis');
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
  console.log('the winner is Koalas');
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 ) {
  console.log("it's tie");
} else {
  console.log('No winner!!!')
}






