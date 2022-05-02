const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const tokenize = (input) => {
  const tokens = [];
  let cursor = 0;
  while(cursor<input.length) {
    const char = input[cursor];
    if (isParenthesis(char)) {
      tokens.push({type: 'Parenthesis', value: char})
      cursor++;
      continue;
    }

    if (isWhitespace(char)) {
      cursor++;
    }
    return tokens;
  }
};

module.exports = { tokenize };
