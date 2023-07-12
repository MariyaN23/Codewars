//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let arr = Array.from(n.toString());
    let out = [];
    for (let i = 0; i<arr.length; i++) {
      out.unshift(Number(arr[i]));
    }
    return out;
  } 