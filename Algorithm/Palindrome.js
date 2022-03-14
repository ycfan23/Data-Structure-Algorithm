function palindrome(str) {
  let reg = /[\W_]/g;
  let newStr = str.toLowerCase().replace(reg, '');

  let reversed = newStr.split('').reverse().join('');

  return reversed === str ? true : false;
}