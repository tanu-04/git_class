// The Reading List
const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', alreadyRead: false },
  ];
  
  books.forEach((book) => {
    if (book.alreadyRead) {
      console.log(`You already read "${book.title}" by ${book.author}.`);
    } else {
      console.log(`You still need to read "${book.title}" by ${book.author}.`);
    }
  });