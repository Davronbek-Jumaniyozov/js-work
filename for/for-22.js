// For-22
let n = 2;
let s = 1;

for (let i = 1; i <= n; i++) {
  let k = 1;

  for (let j = 1; j <= i; j++) {
    k *= j;
  }

  s += 1/k;
}
console.log(s);