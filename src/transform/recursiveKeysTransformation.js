import { isObject } from "../checks";
import toCamelCase from "./toCamelCase";
import toSnakeCase from "./toSnakeCase";

export const recursiveKeysTransformation = (obj, transformFunc) => {
  if (isObject(obj)) {
    const n = {};
    Object.keys(obj).forEach((key) => {
      n[transformFunc(key)] = recursiveKeysTransformation(
        obj[key],
        transformFunc,
      );
    });
    return n;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => recursiveKeysTransformation(item, transformFunc));
  }
  return obj;
};

export const keysToCamel = (obj) =>
  recursiveKeysTransformation(obj, toCamelCase);

export const keysToSnake = (obj) =>
  recursiveKeysTransformation(obj, toSnakeCase);
