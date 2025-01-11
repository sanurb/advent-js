import { prepareGifts } from './solution';

/**
 * Test utilities for generating test data
 */
const TestUtils = {
  generateLargeArray(size, maxValue = 1000) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue));
  },

  generateSortedArray(size) {
    return Array.from({ length: size }, (_, i) => i);
  },

  addDuplicates(arr, duplicateRate = 0.3) {
    return [...arr, ...arr.filter(() => Math.random() < duplicateRate)];
  },

  measureExecutionTime(fn, input) {
    const start = performance.now();
    const result = fn(input);
    const end = performance.now();
    return { result, executionTime: end - start };
  }
};

describe('Challenge #1: 🎁 Prepare Gifts', () => {
  // Core functionality tests
  describe('Core Requirements', () => {
    const testCases = [
      {
        input: [3, 1, 2, 3, 4, 2, 5],
        expected: [1, 2, 3, 4, 5],
        description: 'removes duplicates and sorts the array (case 1)'
      },
      {
        input: [5, 5, 5, 5],
        expected: [5],
        description: 'removes duplicates and returns a single-element array'
      },
      {
        input: [1, 2, 3],
        expected: [1, 2, 3],
        description: 'returns the same array when input is already sorted and unique'
      },
      {
        input: [],
        expected: [],
        description: 'returns an empty array for empty input'
      },
      {
        input: [10, 20, 20, 10, 30, 30, 40],
        expected: [10, 20, 30, 40],
        description: 'removes duplicates and sorts the array with larger numbers'
      },
      {
        input: [-3, -1, -2, -1, -3, 0],
        expected: [-3, -2, -1, 0],
        description: 'handles negative numbers and sorts them correctly'
      },
      {
        input: [1, 1, 2, 3, 3, 4],
        expected: [1, 2, 3, 4],
        description: 'removes duplicates from an already sorted array'
      },
      {
        input: [42],
        expected: [42],
        description: 'handles single-element arrays'
      }
    ];

    it.each(testCases)('$description', ({ input, expected }) => {
      expect(prepareGifts(input)).toEqual(expected);
    });
  });

  // Property-based tests
  describe('Invariant Properties', () => {
    it('should always return a sorted array', () => {
      const input = TestUtils.generateLargeArray(100);
      const result = prepareGifts(input);

      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
    });

    it('should always return unique elements', () => {
      const input = TestUtils.addDuplicates(TestUtils.generateLargeArray(100));
      const result = prepareGifts(input);
      const uniqueSet = new Set(result);

      expect(result).toHaveLength(uniqueSet.size);
    });

    it('should preserve all unique elements from input', () => {
      const input = [1, 2, 2, 3, 3, 3];
      const result = prepareGifts(input);
      const inputSet = new Set(input);

      expect(new Set(result)).toEqual(inputSet);
    });
  });

  // Edge cases and boundary tests
  describe('Edge Cases', () => {
    it('handles array with Number.MAX_SAFE_INTEGER', () => {
      const input = [Number.MAX_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER];
      const expected = [1, Number.MAX_SAFE_INTEGER];
      expect(prepareGifts(input)).toEqual(expected);
    });

    it('handles array with Number.MIN_SAFE_INTEGER', () => {
      const input = [Number.MIN_SAFE_INTEGER, 0, Number.MIN_SAFE_INTEGER];
      const expected = [Number.MIN_SAFE_INTEGER, 0];
      expect(prepareGifts(input)).toEqual(expected);
    });

    it('handles array with duplicate zeros', () => {
      const input = [-0, +0, 0, -0, +0];
      const expected = [0];
      expect(prepareGifts(input)).toEqual(expected);
    });
  });

  // Performance tests
  describe('Performance Characteristics', () => {
    const PERFORMANCE_THRESHOLD = 100; // ms

    it('handles large arrays efficiently', () => {
      const input = TestUtils.generateLargeArray(10000);
      const { executionTime } = TestUtils.measureExecutionTime(prepareGifts, input);

      expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD);
    });

    it('performs well with pre-sorted arrays', () => {
      const input = TestUtils.generateSortedArray(10000);
      const { executionTime } = TestUtils.measureExecutionTime(prepareGifts, input);

      expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD);
    });

    it('handles arrays with high duplicate ratio efficiently', () => {
      const input = TestUtils.addDuplicates(TestUtils.generateLargeArray(5000), 0.8);
      const { executionTime } = TestUtils.measureExecutionTime(prepareGifts, input);

      expect(executionTime).toBeLessThan(PERFORMANCE_THRESHOLD);
    });
  });

  // Input validation tests
  describe('Input Validation', () => {
    it('should preserve the input array', () => {
      const input = [3, 1, 4, 1, 5];
      const inputCopy = [...input];
      prepareGifts(input);

      expect(input).toEqual(inputCopy);
    });

    // It is guaranteed to be an array of integers according to the problem
    // statement, so this test is not necessary.
    // it('returns empty array for non-array inputs', () => {
    //   const invalidInputs = [null, undefined, '', 0, false];

    //   invalidInputs.forEach(input => {
    //     expect(prepareGifts(input)).toEqual([]);
    //   });
    // });
  });
});
