//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  let out = [];
  for (let i=0; i<l.length; i++) {
    if (typeof l[i] == "number") {  //typeof n = "" (n должен быть "number", "string" ...)
      out.push(l[i]);
    }
  }
  return out;
}