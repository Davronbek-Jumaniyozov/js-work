// For-17
let n = 5;
let a = 2;
let s = 0;
let d = 0;
for(let i = 1; i <= n; i++) {
  d = Math.pow((a), i);
  s += 1 + Math.pow((a), i);
  console.log(`darajalar ` + d);
}
console.log(`darajalarni yig'indisi ` + s);