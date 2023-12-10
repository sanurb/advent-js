import { manufacture, manufactureAlt } from './solution';

describe('Challenge 02: We start the factory', () => {
  describe('manufacture(...)', () => {
    const testCases = [
      {
        args: [['tren', 'oso', 'pelota'], 'tronesa'],
        expected: ['tren', 'oso'],
        description: 'should return the list of gifts that can be made (1)'
      },
      {
        args: [['juego', 'puzzle'], 'jlepuz'],
        expected: ['puzzle'],
        description: 'should return the list of gifts that can be made (2)'
      },
      {
        args: [['libro', 'ps5'], 'psli'],
        expected: [],
        description: 'should return an empty list if no gifts can be made'
      }
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(manufacture(...args)).toEqual(expected);
      expect(manufactureAlt(...args)).toEqual(expected);
    });
  });
});
