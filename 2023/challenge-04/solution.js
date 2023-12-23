function decode(message) {
  const stack = [];
  let currentString = '';

  for (const char of message) {
    if (char === '(') {
      stack.push(currentString);
      currentString = '';
    } else if (char === ')') {
      currentString = (stack.pop() || '') + currentString.split('').reverse().join('');
    } else {
      currentString += char;
    }
  }

  return currentString;
}

function decodeAlt(message) {
  const regex = /\([^()]*\)/g;
  let prevMessage = '';

  while (message !== prevMessage) {
    prevMessage = message;
    message = message.replace(regex, match => match.slice(1, -1).split('').reverse().join(''));
  }

  return message;
}

function decodeWithRecursion(message) {
  const msg = message.replace(/\(([^()]*)\)/g, (_, match) => match.split('').reverse().join(''));

  return msg.includes('(') ? decode(msg) : msg;
}

export { decode, decodeAlt, decodeWithRecursion };
