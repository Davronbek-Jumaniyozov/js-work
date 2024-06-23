// If-20
let n = 56987;

let a = n / 10000;

let b1 = Math.floor(n/1000);
let a1 = b1 % 10;

let b2 = Math.floor(n/100);
let a2 = b2 % 10;

let b3 = n % 100;
let a3 = Math.floor(b3/10);

let a4 = n%10;

if(a > a1 && a > a2 && a > a3 && a > a4){
  console.log(a);
} else if(a1 > a && a1 > a2 && a1 > a3 && a1 > a4) {
  console.log(a1);
} else if(a2 > a && a2 > a1 && a2 > a3 && a2 > a4) {
  console.log(a2);
} else if(a3 > a && a3 > a1 && a3 > a2 && a3 > a4) {
  console.log(a3);
} else if(a4 > a && a4 > a1 && a4 > a2 && a4 > a3) {
  console.log(a4);
};