// If-17
let n = 33;

let a1 = Math.floor(n/1000);

let b2 = Math.floor(n/100);
let a2 = b2 % 10;

let b3 = n % 100;
let a3 = Math.floor(b3/10);

let a4 = n%10;

if(a1 % 2 == 1 && a2 % 2 == 1 && a3 % 2 == 1 && a4 % 2 == 1) {
  console.log(a1 + a2 + a3 + a4);
} else if(a2 % 2 == 1 && a3 % 2 == 1 && a4 % 2 == 1) {
  console.log(a2 + a3 + a4);
} else if(a3 % 2 == 1 && a4 % 2 == 1) {
  console.log(a3 + a4);
} else if(a4 % 2 == 1) {
  console.log(a4);
};

 