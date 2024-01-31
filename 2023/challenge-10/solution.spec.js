/* eslint-disable no-useless-concat */
import { createChristmasTree } from './solution';

describe('Challenge #10: Create your own Christmas tree', () => {
  describe('createChristmasTree(ornaments, height)', () => {
    const testCases = [
      {
        args: ['x', 3],
        expected: '  x\n' + ' x x\n' + 'x x x\n' + '  |\n',
        description: 'Christmas tree with height 3 and ornaments "x"'
      },
      {
        args: ['xo', 4],
        expected: '   x\n' + '  o x\n' + ' o x o\n' + 'x o x o\n' + '   |\n',
        description: 'Christmas tree with height 4 and ornaments "xo"'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(createChristmasTree(...args)).toEqual(expected);
    });
  });
});
