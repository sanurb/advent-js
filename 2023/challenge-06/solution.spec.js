import { maxDistance } from './solution';

describe('Challenge 06: The reindeer on trial', () => {
  describe('maxDistance(movements)', () => {
    const testCases = [
      {
        args: ['>>*<'],
        expected: 2,
        description: 'Simple case with one wildcard'
      },
      {
        args: ['<<<>'],
        expected: 2,
        description: 'Simple case without wildcard'
      },
      {
        args: ['>***>'],
        expected: 5,
        description: 'Simple case with three wildcards'
      },
      {
        args: ['<<**>>'],
        expected: 2,
        description: 'Simple case with two wildcards'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(maxDistance(...args)).toEqual(expected);
    });
  });
});
