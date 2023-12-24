import { adjustLights, adjustLightsUsingColorMap, adjustLightsByPatternCalculation } from './solution';

describe('Challenge #9: Switch the lights', () => {
  describe('adjustLights(lights)', () => {
    const testCases = [
      {
        args: [['🟢', '🔴', '🟢', '🟢', '🟢']],
        expected: 1,
        description: 'you change the fourth light to red'
      },
      {
        args: [['🔴', '🔴', '🟢', '🟢', '🔴']],
        expected: 2,
        description: 'you change the second light to green and the third to red'
      },
      {
        args: [['🟢', '🔴', '🟢', '🔴', '🟢']],
        expected: 0,
        description: 'they are already alternating'
      },
      {
        args: [['🔴', '🔴', '🔴']],
        expected: 1,
        description: 'you change the second light to green'
      }
    ];

    it('#T should return a number', () => {
      expect(typeof adjustLights([['🟢', '🔴', '🟢', '🟢', '🟢']])).toBe('number');
      expect(typeof adjustLightsUsingColorMap([['🟢', '🔴', '🟢', '🟢', '🟢']])).toBe('number');
      expect(typeof adjustLightsByPatternCalculation([['🟢', '🔴', '🟢', '🟢', '🟢']])).toBe('number');
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(adjustLights(...args)).toEqual(expected);
      expect(adjustLightsUsingColorMap(...args)).toEqual(expected);
      expect(adjustLightsByPatternCalculation(...args)).toEqual(expected);
    });
  });
});
