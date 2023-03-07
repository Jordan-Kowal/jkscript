/* eslint-disable guard-for-in */
import dayjs from 'dayjs';

const cloneDayjsObject = (obj) => obj.clone();

const cloneSet = (obj) => {
  const newSet = new Set();
  obj.forEach((value) => newSet.add(deepCopy(value)));
  return newSet;
};

const cloneMap = (obj) => {
  const newMap = new Map();
  obj.forEach((value, key) => newMap.set(key, deepCopy(value)));
  return newMap;
};

const cloneArrayOrObject = (obj) => {
  const newObject = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    const value = obj[key];
    newObject[key] = deepCopy(value);
  }
  return newObject;
};

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (obj instanceof dayjs) return cloneDayjsObject(obj);
  if (obj instanceof Set) return cloneSet(obj);
  if (obj instanceof Map) return cloneMap(obj);
  return cloneArrayOrObject(obj);
}

export default deepCopy;
