import { camelToSnakeCase, toCamel } from '../../string';
import isObject from '../isObject';

export function keysToCamel(obj) {
  return recursiveKeysTransformation(obj, toCamel);
}

export function keysToSnake(obj) {
  return recursiveKeysTransformation(obj, camelToSnakeCase);
}

function recursiveKeysTransformation(obj, transformFunc) {
  if (isObject(obj)) {
    const n = {};
    Object.keys(obj).forEach((key) => {
      n[transformFunc(key)] = recursiveKeysTransformation(
        obj[key],
        transformFunc
      );
    });
    return n;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => recursiveKeysTransformation(item, transformFunc));
  }

  return obj;
}
