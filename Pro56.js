/*This time no story, no theory. The examples below show you how to write function accum:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
	let out = "";
  for (let i=0; i<s.length; i++) {
    out += s[i].toUpperCase();
    for (let j=1; j<=i; j++) {
      out += s[i].toLowerCase();
    }
    out += "-";
  }
  return out.slice(0, -1);
}