// For-20
let n = 3;
let s = 0;

for (let i = 1; i <= n; i++) {
  let k = 1;

  for (let j = 1; j <= i; j++) {
    k *= j;
  }

  s += k;
}
console.log(s);