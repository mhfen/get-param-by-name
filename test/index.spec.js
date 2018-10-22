import getParamByName from '~/src/index';

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

  it('should strip away unnecessary characters', () => {
    const badSearch = 'te\st';
    const search = 'test';
    const value = 'some-value';
    const url = `http://some-url.com/?${search}=${value}`;
    const result = getParamByName(badSearch, url);

    expect(result).toBe(value);
  });
});
