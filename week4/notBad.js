
function notBad(str) {
    const notIndex = str.indexOf('not');
    const badIndex = str.indexOf('bad');
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
      return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
    } else {
      return str;
    }
  }
  
  console.log(notBad('This dinner is not that bad!'));
  console.log(notBad('This movie is not so bad!'));
  console.log(notBad('This dinner is bad!'));