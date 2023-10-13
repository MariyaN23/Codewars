/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/

function alphabetPosition(text) {
    let out = "";
    for (let i=0; i<text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
        let code = text[i].charCodeAt()
        if (code>64&&code<91) {out+=`${(code - 64)} `;}
      } if (text[i] === text[i].toLowerCase()) {
        let code = text[i].charCodeAt()
         if (code>96&&code<123) {out+=`${(code - 96)} `;}
      }
    }
    return out.trim();
  }