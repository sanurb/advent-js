// Brute force solution
function getIndexsForPalindrome(word) {
  const isPalindrome = wordToCheck => wordToCheck === wordToCheck.split('').reverse().join('');

  const swap = (newWord, start, end) => {
    const wordArr = newWord.split('');
    [wordArr[start], wordArr[end]] = [wordArr[end], wordArr[start]];
    return wordArr.join('');
  };

  if (isPalindrome(word)) return [];

  for (let start = 0; start < word.length; start++) {
    for (let end = start + 1; end < word.length; end++) {
      const newWord = swap(word, start, end);
      if (isPalindrome(newWord)) return [start, end];
    }
  }

  return null;
}

// Best performance solution
function getIndexsForPalindromeAlt(word) {
  const isPalindrome = str => {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  };

  if (isPalindrome(word)) return [];

  const swapChars = (str, i, j) => {
    const strArr = str.split('');
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
    return strArr.join('');
  };

  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      for (let k = i + 1; k < j; k++) {
        if (word[k] === word[j] && isPalindrome(swapChars(word, i, k))) {
          return [i, k];
        }
      }
      for (let k = j - 1; k > i; k--) {
        if (word[k] === word[i] && isPalindrome(swapChars(word, k, j))) {
          return [k, j];
        }
      }
      return null;
    }
  }
  return null;
}

// Best readability and performant solution.
const getIndexsForPalindromeReadable = word => {
  const splitChars = [...word];
  const isPalindrome = (str, start = 0, end = str.length - 1) => {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start += 1;
      end -= 1;
    }
    return true;
  };

  if (isPalindrome(word)) return [];

  for (const [i, char] of splitChars.entries()) {
    for (const [j, otherChar] of splitChars.entries()) {
      const swappedChars = [...splitChars];
      [swappedChars[i], swappedChars[j]] = [otherChar, char];
      if (isPalindrome(swappedChars)) return [i, j];
    }
  }

  return null;
};

export { getIndexsForPalindrome, getIndexsForPalindromeAlt, getIndexsForPalindromeReadable };