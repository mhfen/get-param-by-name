import getParamByName from '~/dist/index';

describe('Get Param By Name', () => {
  it('returns null if there are no matches', () => {
    const url = 'http://some-url.com/';
    const search = 'test';
    const result = getParamByName(search, url);

    expect(result).toBe(null);
  });

  it('returns empty string if the param is present but the value is missing', () => {
    const url = 'http://some-url.com/?test=';
    const search = 'test';
    const result = getParamByName(search, url);

    expect(result).toBe('');
  });

  it('returns the value if the param and value are present', () => {
    const search = 'test';
    const value = 'some-value';
    const url = `http://some-url.com/?${search}=${value}`;
    const result = getParamByName(search, url);

    expect(result).toBe(value);
  });
});
