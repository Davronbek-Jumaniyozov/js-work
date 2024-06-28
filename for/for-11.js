// For-11
let n = 3;
let s = n**2;

for (let i = 1; i < n; i++) {
  s += Math.pow((n+i), 2);
}
console.log(s);