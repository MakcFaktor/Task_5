const exchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let amountInUAH = dollars * exchangeRate;
  console.log(`${dollars} доларів = ${amountInUAH} гривень`);
}
