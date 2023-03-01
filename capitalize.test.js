const capitalize = require("./capitalize");

describe('Test Capitalized string', () => {
  test('`test` should be `Tset`', () => {
    expect(capitalize('test')).toBe('Test');
  });
})