import readline from 'readline-sync'

export const requestName = () => {
    const rsl = readline.question("May I have your name? ");
    return rsl
}