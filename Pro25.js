// Complete the solution so that it reverses the string passed into it.

function solution(str) {
    let out = "";
      for (let i = str.length-1; i>=0; i--) {
        out += str[i];
      }
      return out;
      }