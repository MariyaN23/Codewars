/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    let out = 0;
    let vowels = "aeiou";
     for (let i = 0; i<str.length; i++) {
        for (let l = 0; l<vowels.length; l++) {
          if (str[i] == vowels[l]) {
            out++;
          }
        }
       } 
      return out;
     }