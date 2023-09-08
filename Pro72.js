//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
//If the two numbers are equal return a or b.

function getSum(a, b)
{
   let out = 0;
  if (a>b) {
for (let i=b; i<=a; i++) {
out += i;
}
}
  if (a<b) {
for (let i=a; i<=b; i++) {
out +=i;
}
}
  if (a===b) {
out = a;
  }
  return out;
}