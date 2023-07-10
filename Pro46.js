// Given an integral number, determine if it's a square number.

var isSquare = function(n){
  if (n<0) {
    return false;
  }
 let result = Math.sqrt(n);
    return (result % 1 === 0);
  }