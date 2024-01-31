import { getIndexsForPalindrome } from './solution';

describe('Challenge #10: Create your own Christmas tree', () => {
  describe('getIndexsForPalindrome(word)', () => {
    const testCases = [
      {
        args: ['abab'],
        expected: [0, 1],
        description: 'input abab'
      },
      {
        args: ['abac'],
        expected: null,
        description: 'input abac'
      },
      {
        args: ['aaaaaaaa'],
        expected: [],
        description: 'input aaaaaaaa'
      },
      {
        args: ['aaababa'],
        expected: [1, 3],
        description: 'input aaababa'
      },
      {
        args: ['rotavator'],
        expected: [],
        description: 'input rotavator'
      },
      {
        args: ['rotaratov'],
        expected: [],
        description: 'input rotaratov'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(getIndexsForPalindrome(...args)).toEqual(expected);
    });
  });
});
