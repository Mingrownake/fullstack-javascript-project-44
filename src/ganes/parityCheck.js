import * as general from '../index.js';

const run = () => {
  const name = general.greeting();
  const maxNumber = 100;
  general.rule('Answer "yes" if the number is even, otherwise answer "no".');
  let rsl = true;
  for (let index = 0; index < general.countAttempts; index += 1) {
    const number = general.getRandomInt(maxNumber);
    const answer = general.getAnswer(number);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    rsl = general.isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
