/*Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.
*/

function digitalRoot(n) {
    let str = n.toString();
    let sum = 0;
    while (str.length>1) {
    for (let i=0; i<str.length; i++) {
      sum += Number(str[i]);
    }
      str = sum.toString();
      sum = 0;
      }
    return Number(str);
  }