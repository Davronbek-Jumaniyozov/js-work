// For-9
let a = 1;
let b = 4;
let s = 0;
for(let i = a; i <= b; i++) {
  console.log(`Sonlarning Kvadratlar ` + i**2);
  s = s + Math.pow((i), 2);
} 
console.log(`Kvadratlar yig'indisi ` + s);
