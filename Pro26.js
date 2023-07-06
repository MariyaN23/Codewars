//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    let answer = "";
    switch (bool) {
        case true:
        answer = "Yes";
        break;
        case false:
        answer = "No";
    }
    return answer;
  }