import readline from 'readline-sync';

const maxNumber = 100;

const getRandomInt = () => Math.floor(Math.random() * maxNumber);

const check = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const expectedCount = 3;
  let rsl = true;
  for (let index = 0; index < expectedCount; index++) {
    const number = getRandomInt();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readline.question('Your answer: ');
    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      rsl = false;
      break;
    }
  }
  if (rsl) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default check;
