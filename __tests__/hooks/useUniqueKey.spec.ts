import { renderHook } from '@testing-library/react';
import useUniqueKey from '@/hooks/useUniqueKey';

describe('useUniqueKey', () => {
  it('useUniqueKey', async () => {
    const { result } = renderHook(() => useUniqueKey('suffix'));

    const [geUniqueKey] = result.current;

    expect(geUniqueKey('key')).toBe('key');
    expect(geUniqueKey('key')).toBe('key-suffix');
    expect(geUniqueKey('key')).toBe('key-suffix-suffix');

    expect(geUniqueKey('key2')).toBe('key2');
    expect(geUniqueKey('key3')).toBe('key3');
  });
});
