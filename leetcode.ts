const wordList = [
  'trans',
  'transfer',
  'transform',
  'train',
  'translator',
  'test',
  'abandon',
];

function transform<T, K>() {
  let result = {};
  for (const word of wordList) {
    let current = result;
    for (const char of word) {
      if (!current[char]) {
        current[char] = {};
      }
      current = current[char];
    }
  }
  return result;
}

{
  a: {
    b: {
      c: {
        isWord: true;
      }
      d: {
        isWord: true;
      }
    }
  }
}

const result = {};
for (const word of wordList) {
  let current = result;
  for (const char of word) {
    if (!current[char]) {
      current[char] = {};
    }
    current = current[char];
  }
}
