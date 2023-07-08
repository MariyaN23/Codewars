//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    let out = "";
      for (let i=0; i<x.length; i++)
        if (x[i] !== " ") {
          out += x[i];
        }
      return out;
    }