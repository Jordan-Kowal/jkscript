import dayjs from 'dayjs';

const deepCopy = (obj) => {
  // If not object or array, return obj
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  // If dayjs, clone date
  if (obj instanceof dayjs) {
    return obj.clone();
  }
  // Otherwise, continue the recursion
  const newObject = Array.isArray(obj) ? [] : {};
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    const value = obj[key];
    newObject[key] = deepCopy(value);
  }
  return newObject;
};

export default deepCopy;
