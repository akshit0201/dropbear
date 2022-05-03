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
      continue;
    }

    if (isNumber(char)) {
      let num = char;
      while (isNumber(input[cursor+1])){
        num += input[cursor+1];
        cursor++;
      }
      tokens.push({type: 'Number', value: parseInt(num,10)})
      cursor++;
      continue;
    }

    if (isLetter(char)) {

      tokens.push({type: 'Name', value: char})
      cursor++;
      continue;
    }
    throw new Error(`${char} is not valid`)
  }
    return tokens;

};

module.exports = { tokenize };
