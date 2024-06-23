// If-11
let a = 19;
if(9 < a && a < 99 && a % 2 == 1) {
  console.log(`ikki xonali toq son`);
} 
else if(9 < a && a < 99 && a % 2 == 0) {
  console.log(`ikki xonali juft son`);
} 
else if(99 < a && a < 999 && a % 2 == 1) {
  console.log(`Uch xonali toq son`);
} 
else if(99 < a && a < 999 && a % 2== 0) {
  console.log(`Uch xonali juft son`);
} else {
  console.log(`Siz xato son kiritingiz`);
}