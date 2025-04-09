function mixUpUserInput() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the first string: ', (str1) => {
    rl.question('Enter the second string: ', (str2) => {
      const result = mixUp(str1, str2);
      console.log(result);
      rl.close();
    });
  });
}

function mixUp(str1, str2) {
  const newStr1 = str2.slice(0, 2) + str1.slice(2);
  const newStr2 = str1.slice(0, 2) + str2.slice(2);
  return `${newStr1} ${newStr2}`;
}

mixUpUserInput();