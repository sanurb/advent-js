import { checkIsValidCopy } from './solution';

describe('Challenge #12: Check if a string is a valid copy of another string', () => {
  describe('checkIsValidCopy(original, copy)', () => {
    const testCases = [
      {
        args: ['Santa Claus is coming', 'sa#ta Cl#us i+ comin#'],
        expected: true,
        description: 'input Santa Claus is coming and sa#ta Cl#us i+ comin#'
      },
      {
        args: ['s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'],
        expected: false,
        description: 'input s#nta Cla#s is coming and p#nt: cla#s #s c+min#'
      },
      {
        args: ['Santa Claus', 's#+:. c:. s'],
        expected: true,
        description: 'input Santa Claus and s#+:. c:. s'
      },
      {
        args: ['Santa Claus', 's#+:.#c:. s'],
        expected: false,
        description: 'input Santa Claus and s#+:. #c:. s'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(checkIsValidCopy(...args)).toEqual(expected);
    });
  });
});
