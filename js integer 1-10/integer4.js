// integer-4
let a = 123;
let a1 = Math.floor(a/100);
let b1 = a%100;
let a2 = Math.floor(b1/10);
let a3 = a%10;
console.log(`${a2} ${a1} ${a3}`);