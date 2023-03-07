import getRandomInt from './getRandomInt';

describe('maths/getRandomInt', () => {
  test('Should always return an int within the given range', () => {
    for (let i = 0; i < 100; i++) {
      const value = getRandomInt(0, 10);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(10);
    }
  });
});
