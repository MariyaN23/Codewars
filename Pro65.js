//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  let out = 0;  
  if (number%2 == 0) {
      out = number*8;
    } else {
      out = number*9;
    }
  return out;
}