import { appendListParams, setBoolParam, setParam } from './utils';

describe('utils/setParam', () => {
  test('Should correctly set/override the param', () => {
    const urlParams = new URLSearchParams();
    setParam(urlParams, 'key', 'value');
    expect(urlParams.get('key')).toBe('value');
    setParam(urlParams, 'key', 'newValue');
    expect(urlParams.get('key')).toBe('newValue');
  });

  test('Should not set the param if value is falsy', () => {
    const urlParams = new URLSearchParams();
    setParam(urlParams, 'key', '');
    expect(urlParams.get('key')).toBeNull();
    setParam(urlParams, 'key', null);
    expect(urlParams.get('key')).toBeNull();
    setParam(urlParams, 'key', undefined);
    expect(urlParams.get('key')).toBeNull();
  });
});

describe('utils/setBoolParam', () => {
  test('Should correctly set/override the boolean param', () => {
    const urlParams = new URLSearchParams();
    setBoolParam(urlParams, 'key', true);
    expect(urlParams.get('key')).toBe('true');
    setBoolParam(urlParams, 'key', false);
    expect(urlParams.get('key')).toBe('false');
  });

  test('Should work with non-boolean values', () => {
    const urlParams = new URLSearchParams();
    setBoolParam(urlParams, 'key', 'value');
    expect(urlParams.get('key')).toBe('true');
    setBoolParam(urlParams, 'key', 1);
    expect(urlParams.get('key')).toBe('true');
    setBoolParam(urlParams, 'key', 0);
    expect(urlParams.get('key')).toBe('false');
  });
});

describe('utils/appendListParams', () => {
  test('Should correctly append the list of params', () => {
    const urlParams = new URLSearchParams();
    const values = ['value1', 'value2'];
    appendListParams(urlParams, 'key', values);
    expect(urlParams.getAll('key')).toEqual(values);
  });

  test('Should not append the list of params if it is empty', () => {
    const urlParams = new URLSearchParams();
    appendListParams(urlParams, 'key', []);
    expect(urlParams.get('key')).toBeNull();
  });
});
