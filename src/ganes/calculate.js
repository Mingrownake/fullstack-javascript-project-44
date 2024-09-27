import * as general from '../index.js';

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

const calculation = (firstNumber, secondNumber) => {
  const operations = ['-', '+', '*'];
  const selectOperation = operations[general.getLimitedInt(0, operations.length - 1)];
  const correctAnswer = calculateCorrectAnswer(firstNumber, secondNumber, selectOperation);
  return [selectOperation, correctAnswer];
};

const run = () => {
  const maxNumber = 10;
  const name = general.greeting();
  general.rule('What is the result of the expression?');
  let rsl = true;
  for (let index = 0; index < general.countAttempts; index++) {
    const firstNumber = general.getRandomInt(maxNumber);
    const secondNumber = general.getRandomInt(maxNumber);
    const [selectOperation, correctAnswer] = calculation(firstNumber, secondNumber);
    const answer = Number(general.getAnswer(`${firstNumber} ${selectOperation} ${secondNumber}`));
    rsl = general.isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
