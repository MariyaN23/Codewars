//Given an integral number, determine if it's a square number:

//In mathematics, a square number or perfect square is an integer that is the square of an integer; 
//in other words, it is the product of some integer with itself.


//1 solution
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
  }

//2 solution
  var isSquare = function(n){
    let sqrNumber = Math.sqrt(n);
    let roundNumber = Math.round(sqrNumber);
    if (n >= 0 && n === roundNumber*roundNumber) {
      return true;
    } else {
      return false;
    }
  }