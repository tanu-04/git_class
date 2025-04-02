
function mixUp(str1, str2) {
    const newStr1 = str2.slice(0, 2) + str1.slice(2);
    const newStr2 = str1.slice(0, 2) + str2.slice(2);
    return `${newStr1} ${newStr2}`;
  }
  
  console.log(mixUp('mix', 'pod'));
  console.log(mixUp('dog', 'dinner'));