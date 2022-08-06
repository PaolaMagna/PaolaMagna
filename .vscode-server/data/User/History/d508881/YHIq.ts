import { calculateChange } from '../src';
const coins = [20000, 10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1];
describe('Propiedades', () => {
  test('Levanta error correctamente', () => {
    expect(() => calculateChange(1000, 2000)).toThrowError(Error);
  });
  test('Suma de vuelto equivale la resta', () => {
    for (let i = 0; i < 10; i++) {
      let max = Math.floor(Math.random() * 100000);
      let min = Math.floor(Math.random() * max) - 1;
      const change = calculateChange(max, min);
      expect(change[0]).toBeGreaterThan(0);
      let sum = 0;
      change.reverse().forEach((num, i) => {
        const coinIndex = coins.length - i - 1;
        const currentCoin = coins[coinIndex];
        const nextCoin = coins[coinIndex - 1];
        if (i !== change.length - 1) {
          expect(num).toBeLessThan(nextCoin / currentCoin);
        }
        sum += currentCoin * num;
      });
      expect(sum).toBe(max - min);
    }
  });
});
