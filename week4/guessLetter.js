
const word = ['F', 'O', 'X'];
const guessedLetters = ['_', '_', '_'];
let reward = 0;
const guessedAll = [];
let hangmanState = 0;

function guessLetter(letter) {
  if (guessedAll.includes(letter)) return;
  guessedAll.push(letter);

  let found = false;
  let matches = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      guessedLetters[i] = letter;
      found = true;
      matches++;
    }
  }

  if (found) {
    const amount = Math.floor(Math.random() * 50);
    reward += amount * matches;
    console.log(`Congratulations! You found ${matches} letter(s)!`);
    console.log(`You earned $${amount * matches}.`);
  } else {
      hangmanState++;
      reward -= 20;
      console.log("Wrong guess!");
  }
  console.log(guessedLetters.join(''));

  if (!guessedLetters.includes('_')) {
    console.log('Congratulations! You guessed the word!');
    console.log(`Your final reward is $${reward}.`);
  }

  if (hangmanState >= 6){
      console.log("You lost the game!");
      console.log("Hangman : O--<");
  }
}

guessLetter('F');
guessLetter('O');
guessLetter('X');
guessLetter('A');
guessLetter('B');
guessLetter('C');