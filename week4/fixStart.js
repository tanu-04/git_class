function fixStartUserInput() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter a string: ', (userInput) => {
    const result = fixStart(userInput);
    console.log(result);
    rl.close();
  });
}

function fixStart(str) {
  if (str.length === 0) {
    return ""; 
  }
  const firstChar = str[0];
  const rest = str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
  return firstChar + rest;
}

fixStartUserInput();