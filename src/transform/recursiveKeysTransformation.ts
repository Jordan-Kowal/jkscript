import { isObject } from "../checks";
import toCamelCase from "./toCamelCase";
import toSnakeCase from "./toSnakeCase";

type ObjectOrArray = Record<any, any> | Array<any>;

export const recursiveKeysTransformation = (
  obj: ObjectOrArray,
  transformFunc: CallableFunction,
): ObjectOrArray => {
  if (isObject(obj)) {
    const n = {};
    Object.keys(obj).forEach((key) => {
      // @ts-ignore
      n[transformFunc(key)] = recursiveKeysTransformation(
        // @ts-ignore
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

export const keysToCamel = (obj: ObjectOrArray): ObjectOrArray =>
  recursiveKeysTransformation(obj, toCamelCase);

export const keysToSnake = (obj: ObjectOrArray): ObjectOrArray =>
  recursiveKeysTransformation(obj, toSnakeCase);
