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
  
 
  squareNumber(3);
  halfNumber(5);
  percentOf(2, 4);
  areaOfCircle(2);
  areaOfCircleRounded(2);
  complexOperations(5);