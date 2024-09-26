import {
  greeting, rule, getAnswer, isCorrectAnswer, countAttempts, getRandomInt,
} from '../index.js';

const calculateGCD = (firstNumber, secondNumber) => {
  let rsl = 1;
  for (let index = 1; index < firstNumber + 1; index++) {
    if (firstNumber % index === 0 && secondNumber % index === 0) {
      rsl = index;
    }
  }
  return rsl;
};

const run = () => {
  const maxNumber = 100;
  const name = greeting();
  rule('Find the greatest common divisor of given numbers.');
  let rsl = true;
  for (let index = 0; index < countAttempts; index++) {
    const firstNumber = getRandomInt(maxNumber);
    const secondNumber = getRandomInt(maxNumber);
    const answer = Number(getAnswer(`${firstNumber} ${secondNumber}`));
    const correctAnswer = calculateGCD(firstNumber, secondNumber);
    rsl = isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
