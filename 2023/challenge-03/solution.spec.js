import { findNaughtyStep } from './solution';

describe('Challenge 03: Naughty Elf', () => {
  describe('findNaughtyStep(original, modified)', () => {
    const testCases = [
      {
        args: ['abcd', 'abcde'],
        expected: 'e',
        description: 'Should find extra step at the end'
      },
      {
        args: ['stepfor', 'stepor'],
        expected: 'f',
        description: 'Should find missing step at the end'
      },
      {
        args: ['abcde', 'abcde'],
        expected: '',
        description: 'Should return empty string for no difference'
      },
      {
        args: ['', 'a'],
        expected: 'a',
        description: 'Should find extra step when original is empty'
      },
      {
        args: ['a', ''],
        expected: 'a',
        description: 'Should find missing step when modified is empty'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(findNaughtyStep(...args)).toEqual(expected);
    });
  });
});
