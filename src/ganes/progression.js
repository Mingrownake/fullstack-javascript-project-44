import * as general from '../index.js';

const generateCount = () => {
  const min = 5;
  const max = 10;
  return general.getLimitedInt(min, max);
};

const generateIndex = (max) => general.getLimitedInt(0, max - 1);

const generateStep = () => {
  const max = 10;
  return general.getRandomInt(max);
};

const generateStartNumber = () => {
  const max = 20;
  return general.getRandomInt(max);
};

const generateSequence = (length, start, step) => {
  const items = [];
  let currentNumber = start;
  for (let index = 0; index < length; index++) {
    items.push(currentNumber);
    currentNumber += step;
  }
  return items;
};

const generateCorrectAnswer = () => {
  const length = generateCount();
  const index = generateIndex(length);
  const step = generateStep();
  const start = generateStartNumber();
  const items = generateSequence(length, start, step);
  const correctAnswer = items[index];
  items[index] = '..';
  const rslStr = items.join(' ');
  return [correctAnswer, rslStr];
};

const run = () => {
  const name = general.greeting();
  general.rule('What number is missing in the progression?');
  let rsl = true;
  for (let i = 0; i < general.countAttempts; i++) {
    const [correctAnswer, items] = generateCorrectAnswer();
    const answer = Number(general.getAnswer(items));
    rsl = general.isCorrectAnswer(answer, correctAnswer, name);
    if (!rsl) break;
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default run;
