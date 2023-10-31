/* 
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3)/3;
    if (score >= 90 && score <= 100) {
        return 'A';
    } if (score >= 80 && score < 90) {
        return 'B';
    } if (score >= 70 && score < 80) {
      return 'C';
    } if (score >= 60 && score < 70) {
      return 'D';
    } if (score >= 0 && score < 60) {
      return 'F';
    }
  }

  function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3)/3;
    switch (true) {
        case (score >= 90 && score <= 100):
        return 'A';
        break;
        case (score >= 80 && score < 90):
        return 'B';
        break;
        case (score >= 70 && score < 80):
        return 'C';
        break;
        case (score >= 60 && score < 70):
        return 'D';
        break;
        case (score >= 0 && score < 60):
        return 'F';
        break;
    }
  }