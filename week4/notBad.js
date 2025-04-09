function notBadUserInput() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter a string: ', (userInput) => {
    const result = notBad(userInput);
    console.log(result);
    rl.close();
  });
}

function notBad(str) {
  const notIndex = str.indexOf('not');
  const badIndex = str.indexOf('bad');
  if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
    return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
  } else {
    return str;
  }
}

notBadUserInput();