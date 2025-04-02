
function fixStart(str) {
    const firstChar = str[0];
    const rest = str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
    return firstChar + rest;
  }
  
  console.log(fixStart('babble'));