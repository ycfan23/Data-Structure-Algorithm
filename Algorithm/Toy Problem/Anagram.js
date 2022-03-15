function isItAnagram(str, str2) {
  let storage = {}
  let storage2 = {};

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    storage[currentLetter] = (storage[currentLetter] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let currentLetter = str2[i];
    storage2[currentLetter] = (storage2[currentLetter] || 0) + 1;
  }

  for (let letter in storage) {
    if (storage[letter] !== storage2[letter]) {
      return false
  }
  }
  return true
}

console.log(isItAnagram('holla', 'alloh'))