//When provided with a letter, return its position in the alphabet.

function position(letter){
    letter = letter.toUpperCase();
    let code = letter.charCodeAt();
   return "Position of alphabet: " + (code - 64);
   }
