import { drawGift } from './solution';

describe('Challenge #7: The 3D boxes', () => {
  describe('drawGift', () => {
    const testCases = [
      {
        args: [4, '+'],
        expected: '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n',
        description: 'draws a gift with size 4 and symbol +'
      },
      {
        args: [5, '*'],
        expected: '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n',
        description: 'draws a gift with size 5 and symbol *'
      },
      {
        args: [1, '^'],
        expected: '#\n',
        description: 'draws a gift with size 1 and symbol ^'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(drawGift(...args)).toEqual(expected);
    });
  });
});
