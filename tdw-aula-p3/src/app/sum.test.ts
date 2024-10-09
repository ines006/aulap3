// sum.test.ts
import sum from './sum'; // Use a sintaxe de importação ES6

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
