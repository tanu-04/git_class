// 1. verbing (Node.js with readline)
const readline1 = require('readline');

const rl1 = readline1.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verbing(str) {
  if (str.length >= 3) {
    if (str.endsWith('ing')) {
      return str + 'ly';
    } else {
      return str + 'ing';
    }
  } else {
    return str;
  }
}

rl1.question('Enter a word: ', (userInput) => {
  if (userInput) {
    console.log(verbing(userInput));
  } else {
    console.log('No input provided.');
  }
  rl1.close();
});