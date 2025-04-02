
const readline2 = require('readline');

const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validateCreditCard(number) {
  const cleanedNumber = number.replace(/-/g, '');
  if (cleanedNumber.length !== 16 || !/^\d+$/.test(cleanedNumber)) {
    return { valid: false, number: number, error: 'wrong_length' };
  }

  const digits = cleanedNumber.split('').map(Number);
  if (new Set(digits).size === 1) {
    return { valid: false, number: number, error: 'only_one_digit' };
  }

  if (digits[15] % 2 !== 0) {
    return { valid: false, number: number, error: 'odd_final_digit' };
  }

  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  if (sum <= 16) {
    return { valid: false, number: number, error: 'sum_too_small' };
  }

  return { valid: true, number: number };
}

rl2.question('Enter a credit card number: ', (userInput) => {
  if (userInput) {
    console.log(validateCreditCard(userInput));
  } else {
    console.log('No input provided.');
  }
  rl2.close();
});