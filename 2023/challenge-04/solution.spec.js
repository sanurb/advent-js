import { decode, decodeAlt, decodeWithRecursion } from './solution';

describe('Challenge 04: Turn the parentheses around', () => {
  describe('decode(message)', () => {
    const testCases = [
      {
        args: ['hola (odnum)'],
        expected: 'hola mundo',
        description: 'Simple case with single nested parenthesis'
      },
      {
        args: ['(olleh) (dlrow)!'],
        expected: 'hello world!',
        description: 'Two nested parentheses'
      },
      {
        args: ['sa(u(cla)atn)s'],
        expected: 'santaclaus',
        description: 'Nested parentheses with intermediate characters'
      },
      {
        args: ['((nta)(sa))'],
        expected: 'santa',
        description: 'Nested parentheses at the beginning'
      }
      // The input will always be well formed so no validation is necessary.
      // {
      //   args: ['()())'],
      //   expected: '',
      //   description: 'Empty string with multiple parentheses'
      // },
      // {
      //   args: [')()('],
      //   expected: '',
      //   description: 'Mismatched parentheses'
      // }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(decode(...args)).toEqual(expected);
      expect(decodeAlt(...args)).toEqual(expected);
      expect(decodeWithRecursion(...args)).toEqual(expected);
    });
  });
});
