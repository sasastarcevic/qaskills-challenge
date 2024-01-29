var assert = require('assert')

function romanToInt(s) {
  const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const currentSymbolValue = romanNumerals[s[i]];
      const nextSymbolValue = romanNumerals[s[i + 1]];

      if (nextSymbolValue > currentSymbolValue) {
          result += (nextSymbolValue - currentSymbolValue);
          i++; // Skip the next symbol since it has already been considered
      } else {
          result += currentSymbolValue;
      }
  }

  return result;
}

describe('Unit tests - that check conversion of a Roman numeral to an integer', function () {

  it('should return 3 for the Roman numeral "III"', () => {
    const result = romanToInt('III');
    assert(result, 3);
  });

  it('should return 4 for the Roman numeral "IV"', () => {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('should return 9 for the Roman numeral "IX"', () => {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('should return 58 for the Roman numeral "LVIII"', () => {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('should return 1994 for the Roman numeral "MCMXCIV"', () => {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

});