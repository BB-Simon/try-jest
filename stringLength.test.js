const stringLength = require("./stringLength")

describe('Test string characters count', () => {
  test('`" "` empty should return ', () => {
    expect(stringLength('')).toBe('string must be at least 1 character long');
  });
  test('`testetetstetstetstetstetstetstetst` str char count should be `4`', () => {
    const str = 'testetetstetstetstetstetstetstetst';
    expect(stringLength(str)).toBe('string can\'t be more than 10 character long');
  });
  test('`test` str char count should be `4`', () => {
    const count = stringLength('test')
    expect(count).toBe(4);
  });
})