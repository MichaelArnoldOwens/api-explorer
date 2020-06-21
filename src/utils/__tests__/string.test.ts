import { getLabelFromName } from 'utils/string';

describe('utils/string.ts', () => {
  it('should getLabelFromName()', () => {
    const cases: { [key: string]: { given: string; expected: string } } = {
      test1: { given: 'email', expected: 'Email' },
      test2: { given: 'full-name', expected: 'Full Name' },
      test3: {
        given: 'another-field-with-multiple-hyphens',
        expected: 'Another Field With Multiple Hyphens',
      },
      test4: {
        given: 'a-field-with-a-trailing-hyphen-',
        expected: 'A Field With A Trailing Hyphen',
      },
      test5: {
        given: 'a field with a trailing space ',
        expected: 'A Field With A Trailing Space',
      },
      test6: {
        given: 'asentencewithnoSpaces ',
        expected: 'AsentencewithnoSpaces',
      },
      test7: { given: 'alllowercase ', expected: 'Alllowercase' },
      test8: { given: 'ALLCAPS ', expected: 'ALLCAPS' },
    };
    for (let test in cases) {
      expect(getLabelFromName(cases[test].given)).toEqual(cases[test].expected);
    }
  });
});
