// let jin = 0;
// while (jin < 10) {
//   console.log(jin);
//   jin++;
// }

// let s = 1;
// while (s < 100) {
//   if (s % 7 == 6 && s > 7) {
//     console.log(s);
//   }
//   s++;
// }

// const g = 2;
// let n = 1;
// while (n <= 10) {
//   console.log(g + " x " + n + " = " + g * n);
//   n++;
// }

for (let i = 2000; i <= 2100; i++) {
  if (i % 400 === 0) {
    console.log(i);
  } else if (i % 100 === 0) {
    continue;
  } else if (i % 4 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
