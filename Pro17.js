//Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
    let start = numbers[0];
      let finish = numbers[numbers.length-1];
      let out = [];
      for (let i = start; i<=finish; i++) {
        out.push(i);
      }
      return out;
    }