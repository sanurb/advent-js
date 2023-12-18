import { organizeGifts } from './solution';

describe('Challenge #8: Sorting the warehouse', () => {
  describe('organizeGifts(gifts)', () => {
    const testCases = [
      {
        args: ['76a11b'],
        expected: '[a]{a}{a}(aaaaaa){b}(b)',
        description: '76 gifts type a, 11 gifts type b'
      },
      {
        args: ['70b120a4c'],
        expected: '[b]{b}{b}[a][a]{a}{a}(cccc)',
        description: '70 gifts type b, 120 gifts type a, 4 gifts type c'
      },
      {
        args: ['20a'],
        expected: '{a}{a}',
        description: '20 gifts type a'
      },
      {
        args: ['9c'],
        expected: 'ccccccccc',
        description: '9 gifts type c'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(organizeGifts(...args)).toEqual(expected);
    });
  });
});
