
const readline4 = require('readline');

const rl4 = readline4.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function booksUserInput() {
  const books = [];
  let addMore = true;

  function addBook() {
    rl4.question('Enter book title: ', (title) => {
      rl4.question('Enter book author: ', (author) => {
        rl4.question('Have you already read this book? (yes/no): ', (readInput) => {
          const alreadyRead = readInput.toLowerCase() === 'yes';

          books.push({ title, author, alreadyRead });

          rl4.question('Add another book? (yes/no): ', (addMoreInput) => {
            if (addMoreInput.toLowerCase() === 'yes') {
              addBook();
            } else {
              books.forEach((book) => {
                if (book.alreadyRead) {
                  console.log(`You already read "${book.title}" by ${book.author}.`);
                } else {
                  console.log(`You still need to read "${book.title}" by ${book.author}.`);
                }
              });
              rl4.close();
            }
          });
        });
      });
    });
  }

  addBook();
}

booksUserInput();