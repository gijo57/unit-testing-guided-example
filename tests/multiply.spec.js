const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
  });

  test('should multiply two floating point numbers correctly', () => {
    const result = multiply(2.5, 3.5);
    expect(result).toBe(8.75);
  });

  test('should return 0 when function is called without arguments', () => {
    const result = multiply(10, 0);
    expect(result).toBe(0);
  });
});
