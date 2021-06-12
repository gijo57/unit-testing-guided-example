const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
  });

  test('should return a negative integer when multiplying a positive and a negative integer', () => {
    const result = multiply(-4, 8);
    expect(result).toBeLessThan(0);
  });

  test('should return 0 when function is called with any number and a zero', () => {
    const result = multiply(10, 0);
    expect(result).toBe(0);
  });
});
