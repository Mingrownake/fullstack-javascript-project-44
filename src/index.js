import readline from 'readline-sync';

export const countAttempts = 3;

export const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const rule = (strRule) => {
  console.log(strRule);
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readline.question('Your answer: ');
  return answer;
};

export const isCorrectAnswer = (answer, expect, name) => {
  let rsl = true;
  if (answer === expect) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expect}'`);
    console.log(`Let's try again, ${name}`);
    rsl = false;
  }
  return rsl;
};
