// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    if (number > 0) {
      return -number;
    } else if (number < 0) {
      return number*(-1);
    } else if (number == 0) {
      return number;
    }
  }