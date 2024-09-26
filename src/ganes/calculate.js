import {
  greeting, rule, getAnswer, isCorrectAnswer, countAttempts, getRandomInt,
} from '../index.js';

const calculation = (firstNumber, secondNumber) => {
  const operations = ['-', '+', '*'];
  const selectOperation = operations[getRandomInt(operations.length)];
  const correctAnswer = calculateCorrectAnswer(firstNumber, secondNumber, selectOperation);
  return [selectOperation, correctAnswer];
};

const calculateCorrectAnswer = (firstNumber, secondNumber, selectOperation) => {
  let rsl = 0;
  switch (selectOperation) {
    case '-':
      rsl = firstNumber - secondNumber;
      break;
    case '+':
      rsl = firstNumber + secondNumber;
      break;
    case '*':
      rsl = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return rsl;
};

const run = () => {
  const maxNumber = 10;
  const name = greeting();
  rule('What is the result of the expression?');
  let rsl = true;
  for (let index = 0; index < countAttempts; index++) {
    const firstNumber = getRandomInt(maxNumber);
    const secondNumber = getRandomInt(maxNumber);
    const [selectOperation, correctAnswer] = calculation(firstNumber, secondNumber);
    const answer = Number(getAnswer(`${firstNumber} ${selectOperation} ${secondNumber}`));
    rsl = isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
