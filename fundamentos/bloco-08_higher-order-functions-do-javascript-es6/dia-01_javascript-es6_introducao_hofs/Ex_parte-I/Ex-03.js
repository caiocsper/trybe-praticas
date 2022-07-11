const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswer, studentAnswer) => {
  switch (studentAnswer) {
    case correctAnswer:
      return 1;
    case 'N.A':
      return 0;
    default:
      return -0.5;
  }
}

const calcScore = (correctAnswers, studentAnswers, callback) => {
  let studentScore = 0;

  for (let index = 0; index < studentAnswers.length; index += 1) {
    studentScore += callback(correctAnswers[index], studentAnswers[index]);
  }

  return studentScore;
};

console.log(calcScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));