let num = +prompt("Введіть ціле число:");

let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} є простим числом.`);
} else {
  console.log(`${num} не є простим числом.`);
}
