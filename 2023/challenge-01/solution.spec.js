import { findFirstRepeated } from './solution';

describe('Challenge: Find First Repeated ID in Gifts', () => {
  describe('findFirstRepeated(...)', () => {
    const testCases = [
      { args: [[2, 1, 3, 5, 3, 2]], expected: 3, description: 'should return the first repeated ID (1)' },
      { args: [[5, 1, 2, 3, 2, 5, 1]], expected: 2, description: 'should return the first repeated ID (2)' },
      { args: [[1, 2, 3, 4]], expected: -1, description: 'should return -1 if no repeated ID is found' },
      { args: [[]], expected: -1, description: 'should return -1 for an empty array' }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(findFirstRepeated(...args)).toEqual(expected);
    });
  });
});
