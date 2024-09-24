import readline from 'readline-sync';

const requestName = () => {
  const rsl = readline.question('May I have your name? ');
  return rsl;
};

export default requestName;
