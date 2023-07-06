// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5");  // return "5 1" 

function highAndLow(numbers){
  let t = [];
  numbers = " " + numbers + " ";
  let k = 0;
  for (let j=2; j<numbers.length; j++){
    if (numbers[j] == " ") {
      t.push(Number(numbers.substr(k+1,j-k-1)));
      k = j;
    }
  }
  let min = t[0];
  let max = t[0];
  for (let i=1; i<t.length; i++) {
    if (t[i] > max) {
      max = t[i];
    }
    if (t[i] < min) {
      min = t[i];
    }
  }
  return max + " " + min;
}