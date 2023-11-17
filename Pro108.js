/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */


//1st
function sumMix(x){
    out = 0;
    for (let i=0; i<x.length; i++) {
     out += Number(x[i])
    }
    return out;
  }


  //2nd
function sumMix(x){
    return x.reduce((sum, el) => sum + Number(el), 0);
   }