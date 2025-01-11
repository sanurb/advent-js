import { createFrame } from './solution';

describe('Challenge #2: 🖼️ Framing Names', () => {
  // Test utilities
  const TestUtils = {
    countAsterisks(frame) {
      return frame.split('').filter(char => char === '*').length;
    },

    verifyFrameStructure(frame) {
      const lines = frame.split('\n');
      const width = lines[0].length;

      // All lines should have same width
      return lines.every(line => line.length === width);
    },

    verifyFrameContent(frame, names) {
      const lines = frame.split('\n');
      const contentLines = lines.slice(1, -1);

      return names.every((name, index) => {
        const line = contentLines[index];
        return line.startsWith('* ') && line.includes(name) && line.endsWith(' *');
      });
    }
  };

  // Core functionality tests
  describe('Basic Frame Creation', () => {
    const testCases = [
      {
        input: ['midu', 'madeval', 'educalvolpz'],
        expected: ['***************', '* midu        *', '* madeval     *', '* educalvolpz *', '***************'].join(
          '\n'
        ),
        description: 'creates frame with varying name lengths'
      },
      {
        input: ['midu'],
        expected: ['********', '* midu *', '********'].join('\n'),
        description: 'creates frame for single name'
      },
      {
        input: ['a', 'bb', 'ccc'],
        expected: ['*******', '* a   *', '* bb  *', '* ccc *', '*******'].join('\n'),
        description: 'creates frame with incrementing name lengths'
      }
    ];

    it.each(testCases)('$description', ({ input, expected }) => {
      expect(createFrame(input)).toBe(expected);
    });
  });

  // Property-based tests
  describe('Frame Properties', () => {
    it('frame width should be consistent for all lines', () => {
      const inputs = [
        ['short', 'medium', 'very long name'],
        ['a', 'bb', 'ccc', 'dddd'],
        ['x'.repeat(20), 'y']
      ];

      inputs.forEach(names => {
        const frame = createFrame(names);
        expect(TestUtils.verifyFrameStructure(frame)).toBe(true);
      });
    });

    it('frame should properly contain all names', () => {
      const inputs = [
        ['hello', 'world'],
        ['test', 'frame', 'creation'],
        ['a', 'bb', 'ccc', 'dddd']
      ];

      inputs.forEach(names => {
        const frame = createFrame(names);
        expect(TestUtils.verifyFrameContent(frame, names)).toBe(true);
      });
    });

    it('frame should have correct asterisk borders', () => {
      const names = ['test', 'frame'];
      const frame = createFrame(names);
      const lines = frame.split('\n');

      // Top and bottom borders should be all asterisks
      expect(lines[0]).toMatch(/^\*+$/);
      expect(lines[lines.length - 1]).toMatch(/^\*+$/);

      // Content lines should start and end with asterisk
      lines.slice(1, -1).forEach(line => {
        expect(line).toMatch(/^\*.*\*$/);
      });
    });
  });

  // Edge cases and boundary tests
  describe('Edge Cases', () => {
    it('handles very long names', () => {
      const longName = 'x'.repeat(100);
      const frame = createFrame([longName]);
      expect(TestUtils.verifyFrameStructure(frame)).toBe(true);
      expect(frame).toContain(longName);
    });

    it('handles special characters in names', () => {
      const names = ['hello!', '@world', '#test$'];
      const frame = createFrame(names);
      expect(TestUtils.verifyFrameContent(frame, names)).toBe(true);
    });
  });

  // Performance tests
  describe('Performance', () => {
    it('handles large number of names efficiently', () => {
      const names = Array.from({ length: 1000 }, (_, i) => `name${i}`);
      const start = performance.now();
      createFrame(names);
      const duration = performance.now() - start;

      expect(duration).toBeLessThan(100); // 100ms threshold
    });

    it('handles very wide frames efficiently', () => {
      const names = Array.from({ length: 10 }, () => 'x'.repeat(1000));
      const start = performance.now();
      createFrame(names);
      const duration = performance.now() - start;

      expect(duration).toBeLessThan(100); // 100ms threshold
    });
  });

  // Visual consistency tests
  describe('Visual Consistency', () => {
    it('aligns all names to the left', () => {
      const names = ['a', 'bb', 'ccc'];
      const frame = createFrame(names);
      const lines = frame.split('\n').slice(1, -1);

      lines.forEach(line => {
        expect(line).toMatch(/^\* [^ ]/);
      });
    });
  });
});
