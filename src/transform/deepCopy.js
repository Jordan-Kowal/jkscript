/* eslint-disable guard-for-in */
import dayjs from 'dayjs';

const cloneDayjsObject = (obj) => obj.clone();

const cloneSet = (obj) => {
  const newSet = new Set();
  obj.forEach((value) => newSet.add(deepCopy(value)));
  return newSet;
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
  return cloneArrayOrObject(obj);
}

export default deepCopy;
