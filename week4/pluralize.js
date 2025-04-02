
const readline6 = require('readline');

const rl6 = readline6.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pluralize(noun, number) {
  if (number === 1) {
    return `${number} ${noun}`;
  } else {
    if (noun === 'sheep' || noun === 'geese') {
      return `${number} ${noun}`;
    } else {
      return `${number} ${noun}s`;
    }
  }
}

rl6.question('Enter a noun: ', (noun) => {
  rl6.question('Enter a number: ', (numberInput) => {
    const number = parseInt(numberInput);
    if (noun && !isNaN(number)) {
      console.log(pluralize(noun, number));
    } else {
      console.log('Invalid input.');
    }
    rl6.close();
  });
});