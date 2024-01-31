import { calculateTime } from './solution';

describe('Challenge #13: Calculate time', () => {
  describe('calculateTime(deliveries)', () => {
    const testCases = [
      {
        args: [['00:10:00', '01:00:00', '03:30:00']],
        expected: '-02:20:00',
        description: 'input [00:10:00, 01:00:00, 03:30:00]'
      },
      {
        args: [['02:00:00', '05:00:00', '00:30:00']],
        expected: '00:30:00',
        description: 'input [02:00:00, 05:00:00, 00:30:00]'
      },
      {
        args: [['00:45:00', '00:45:00', '00:00:30', '00:00:30']],
        expected: '-05:29:00',
        description: 'input [00:45:00, 00:45:00, 00:00:30, 00:00:30]'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(calculateTime(...args)).toEqual(expected);
    });
  });
});
