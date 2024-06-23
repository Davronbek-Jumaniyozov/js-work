// integer-8
let x1 = -9.7;
let y1 = -9.9;
let x2 = 0.0;
let y2 = 2.9;
let x3 = -0.1;
let y3 = 5.2;

let a = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
let b = Math.sqrt((x1-x3)**2 + (y1-y3)**2);
let c = Math.sqrt((x2-x3)**2 + (y2-y3)**2);

let p = (a + b + c) / 2;

let s = Math.sqrt(p * (p-a) * (p-b) * (p-c));
console.log((p*2).toFixed(2) + " " + s.toFixed(2));
