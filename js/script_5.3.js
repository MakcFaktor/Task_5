// let N = +prompt("Введіть число N:");
//
// let limit = Math.sqrt(N);
//
// console.log(limit);
//
// for (let i = 1; i <= limit && i <= 100; i++) {
//   let sum = i * i;
//   console.log(`число ${i} квадрат цього числа ${sum}`);
// }

// -----------------------------------------------------------------

let N = parseInt(prompt("Введіть ціле число N:"));

for (let i = 1; i <= 100; i++) {
  let square = i * i;
  if (square <= N) {
    console.log(`число ${i} квадрат цього числа ${square}`);
  }
}
