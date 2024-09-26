import readline from 'readline-sync';

export const countAttempts = 3;

export const  greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readline.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}

export const rule = (strRule) => {
    console.log(strRule);
}

export const getAnswer = (question) => {
    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');
    return answer;
}

export const isCorrectAnswer = (answer, extect, name) => {
    let rsl = true;
    if (answer.toLowerCase() === extect) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${extect}'`);
        console.log(`Let's try again, ${name}`);
        rsl = false;
      }
    return rsl;
}