// The Movie Database
const movie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes'],
  };
  
  function printMovie(movieObj) {
    console.log(
      `${movieObj.title} lasts for ${movieObj.duration} minutes. Stars: ${movieObj.stars.join(
        ', '
      )}.`
    );
  }
  
  printMovie(movie);