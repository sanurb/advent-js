import { cyberReindeer, cyberReindeerReguex } from './solution';

describe("Challenge 05: Santa's CyberTruck", () => {
  describe('cyberReindeer(road, time)', () => {
    const testCases = [
      {
        args: ['S..|...|..', 10],
        expected: [
          'S..|...|..',
          '.S.|...|..',
          '..S|...|..',
          '..S|...|..',
          '..S|...|..',
          '...S...*..',
          '...*S..*..',
          '...*.S.*..',
          '...*..S*..',
          '...*...S..'
        ],
        description: 'Simple case with barrier opening'
      },
      {
        args: ['S.|.', 4],
        expected: ['S.|.', '.S|.', '.S|.', '.S|.'],
        description: 'Simple case without barrier opening'
      },
      {
        args: ['S.|.|.|......|.||.........', 8],
        expected: [
          'S.|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '..S.*.*......*.**.........',
          '..*S*.*......*.**.........',
          '..*.S.*......*.**.........'
        ],
        description: 'Complex case with barrier opening'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(cyberReindeer(...args)).toEqual(expected);
      expect(cyberReindeerReguex(...args)).toEqual(expected);
    });
  });
});
