
const readline5 = require('readline');

const rl5 = readline5.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function movieUserInput() {
  rl5.question('Enter movie title: ', (title) => {
    rl5.question('Enter movie duration in minutes: ', (durationInput) => {
      const duration = parseInt(durationInput);
      const stars = [];

      function getStar() {
        rl5.question('Enter a star name (or type "done"): ', (star) => {
          if (star.toLowerCase() === 'done') {
            const movie = {
              title: title,
              duration: duration,
              stars: stars,
            };
            console.log(
              `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(
                ', '
              )}.`
            );
            rl5.close();
          } else {
            stars.push(star);
            getStar();
          }
        });
      }
      getStar();
    });
  });
}

movieUserInput();