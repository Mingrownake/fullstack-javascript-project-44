import * as general from '../index.js';

const isPrimeNumber = (number) => {
  let rsl = true;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      rsl = false;
      break;
    }
  }
  return rsl;
};

const run = () => {
  const name = general.greeting();
  general.rule('Answer "yes" if given number is prime. Otherwise answer "no".');
  let rsl = true;
  for (let index = 0; index < general.countAttempts; index++) {
    const number = general.getRandomInt(100);
    const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
    const answer = general.getAnswer(number).toLowerCase();
    rsl = general.isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
