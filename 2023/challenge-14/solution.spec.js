import { maxGifts } from './solution';

describe('Challenge #14: Avoid the alarm', () => {
  describe('maxGifts(houses)', () => {
    const testCases = [
      {
        args: [[2, 4, 2]],
        expected: 4,
        description: 'Three houses with 2, 4, 2 gifts'
      },
      {
        args: [[5, 1, 1, 5]],
        expected: 10,
        description: 'Four houses with 5, 1, 1, 5 gifts'
      },
      {
        args: [[4, 1, 1, 4, 2, 1]],
        expected: 9,
        description: 'Six houses with 4, 1, 1, 4, 2, 1 gifts'
      },
      {
        args: [[1, 3, 1, 3, 100]],
        expected: 103,
        description: 'Five houses with 1, 3, 1, 3, 100 gifts'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(maxGifts(...args)).toEqual(expected);
    });
  });
});
