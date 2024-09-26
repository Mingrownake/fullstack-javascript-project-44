import {
  greeting, rule, getAnswer, isCorrectAnswer, countAttempts, getRandomInt,
} from '../index.js';

const run = () => {
  const name = greeting();
  const maxNumber = 100;
  rule('Answer "yes" if the number is even, otherwise answer "no".');
  let rsl = true;
  for (let index = 0; index < countAttempts; index++) {
    const number = getRandomInt(maxNumber);
    const answer = getAnswer(number);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    rsl = isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
