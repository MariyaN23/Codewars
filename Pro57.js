// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    str = str.toLowerCase();
  let x = 0;
  let o = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i]=="x") {
      x ++;
    }
    if (str[i]=="o") {
      o ++;
    }
  }
  return x==o; 
}