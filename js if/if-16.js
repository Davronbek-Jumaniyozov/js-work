// If-16
let n = 8184;

let a1 = Math.floor(n/1000);

let b2 = Math.floor(n/100);
let a2 = b2 % 10;

let b3 = n % 100;
let a3 = Math.floor(b3/10);

let a4 = n%10;

if(n > 0 && n < 10000){
  console.log(a1+a2+a3+a4);
} else if(n > 0 && n < 1000) {
  console.log(a2+a3+a4);
} else if(n > 0 && n < 100) {
  console.log(a3+a4);
} else if(n > 0 && n < 10) {
  console.log(a4);
};

 