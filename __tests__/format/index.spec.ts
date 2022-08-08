// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { addThousandSeparator, formatSectionStr } from '@/format';

describe('addThousandSeparator', () => {
  it('formatSectionStr', () => {
    expect(formatSectionStr('', '-')).toBe('');
    expect(formatSectionStr('123-123', '-')).toBe('123');
    expect(formatSectionStr('123-456', '-')).toBe('123-456');
  });

  it('addThousandSeparator', () => {
    expect(addThousandSeparator('0')).toBe('0');
    expect(addThousandSeparator(0)).toBe('0');
    expect(addThousandSeparator(10000)).toBe('10,000');
    expect(addThousandSeparator(1234.5)).toBe('1,234.5');
  });
});
