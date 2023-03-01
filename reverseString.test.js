const reverseString = require("./reverseString");


describe('Test reverse string', () => {
  test('`test` empty should return `tset`', () => {
    expect(reverseString('test')).toBe('tset');
  });
})