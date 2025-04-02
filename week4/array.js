// The Array
const choices = ['blue', 'pizza', 'javascript'];
for (let i = 0; i < choices.length; i++) {
  let suffix;
  if (i === 0) {
    suffix = '1st';
  } else if (i === 1) {
    suffix = '2nd';
  } else if (i === 2) {
    suffix = '3rd';
  } else {
    suffix = `${i + 1}th`;
  }
  console.log(`My ${suffix} choice is ${choices[i]}.`);
}