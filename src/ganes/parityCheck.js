import { greeting, rule, getAnswer, isCorrectAnswer, countAttempts } from "../index.js";

const maxNumber = 100;

const getRandomInt = () => Math.floor(Math.random() * maxNumber);

const check = () => {
  const name = greeting()
  rule('Answer "yes" if the number is even, otherwise answer "no".');
  let rsl = true;
  for (let index = 0; index < countAttempts; index++) {
    const number = getRandomInt();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = getAnswer(number);
    rsl = isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default check;
