const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function squareNumber(number) {
  const squared = number * number;
  console.log(`The result of squaring the number ${number} is ${squared}.`);
  return squared;
}

function halfNumber(number) {
  const half = number / 2;
  console.log(`Half of ${number} is ${half}.`);
  return half;
}

function percentOf(num1, num2) {
  const percentage = (num1 / num2) * 100;
  console.log(`${num1} is ${percentage}% of ${num2}.`);
  return percentage;
}

function areaOfCircle(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
}

function areaOfCircleRounded(radius) {
  const area = Math.PI * radius * radius;
  const roundedArea = parseFloat(area.toFixed(2));
  console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
  return roundedArea;
}

function complexOperations(number) {
  const half = halfNumber(number);
  const squared = squareNumber(half);
  const area = areaOfCircle(squared);
  const percentage = percentOf(area, squared);
  return percentage;
}

function getNumberInput(prompt, callback) {
  rl.question(prompt, (input) => {
    const number = parseFloat(input);
    if (!isNaN(number)) {
      callback(number);
    } else {
      console.log('Invalid input. Please enter a number.');
      getNumberInput(prompt, callback);
    }
  });
}

function getTwoNumberInput(prompt1, prompt2, callback) {
  rl.question(prompt1, (input1) => {
    const num1 = parseFloat(input1);
    if (!isNaN(num1)) {
      rl.question(prompt2, (input2) => {
        const num2 = parseFloat(input2);
        if (!isNaN(num2)) {
          callback(num1, num2);
        } else {
          console.log('Invalid input for second number. Please enter a number.');
          getTwoNumberInput(prompt1, prompt2, callback);
        }
      });
    } else {
      console.log('Invalid input for first number. Please enter a number.');
      getTwoNumberInput(prompt1, prompt2, callback);
    }
  });
}

function runFunctions() {
  getNumberInput('Enter a number to square: ', (number) => {
    squareNumber(number);
    getNumberInput('Enter a number to halve: ', (number) => {
      halfNumber(number);
      getTwoNumberInput('Enter the first number for percentage: ', 'Enter the second number for percentage: ', (num1, num2) => {
        percentOf(num1, num2);
        getNumberInput('Enter the radius of the circle: ', (radius) => {
          areaOfCircle(radius);
          areaOfCircleRounded(radius);
          getNumberInput('Enter a number for complex operations: ', (complexNumber) => {
            complexOperations(complexNumber);
            rl.close();
          });
        });
      });
    });
  });
}

runFunctions();