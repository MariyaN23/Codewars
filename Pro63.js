//Find the sum of all multiples of n below m
//n and m are natural numbers (positive integers)
//m is excluded from the multiples

function sumMul(n,m){
let out = 0;
  for (let i=1; i<m; i++) {
  if (i%n == 0) {
    out += i;
  }
}
  if (out == 0) {
    return "INVALID";
  }
  return out;
}