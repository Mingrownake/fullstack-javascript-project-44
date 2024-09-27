import * as general from '../index.js';

const calculateGCD = (firstNumber, secondNumber) => {
  let rsl = 1;
  const minNumber = firstNumber <= secondNumber ? firstNumber : secondNumber;
  for (let index = 1; index < minNumber + 1; index++) {
    if (firstNumber % index === 0 && secondNumber % index === 0) {
      rsl = index;
    }
  }
  return rsl;
};

const run = () => {
  const maxNumber = 100;
  const name = general.greeting();
  general.rule('Find the greatest common divisor of given numbers.');
  let rsl = true;
  for (let index = 0; index < general.countAttempts; index++) {
    const firstNumber = general.getRandomInt(maxNumber);
    const secondNumber = general.getRandomInt(maxNumber);
    const answer = Number(general.getAnswer(`${firstNumber} ${secondNumber}`));
    const correctAnswer = calculateGCD(firstNumber, secondNumber);
    rsl = general.isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
