
function verbing(str) {
    if (str.length >= 3) {
      if (str.endsWith('ing')) {
        return str + 'ly';
      } else {
        return str + 'ing';
      }
    } else {
      return str;
    }
  }
  
  console.log(verbing('swim'));
  console.log(verbing('swimming'));
  console.log(verbing('go'));