import dayjs, { type Dayjs } from "dayjs";

type ObjectOrArray =
  | Record<any, any>
  | Array<any>
  | Set<any>
  | Map<any, any>
  | Dayjs;

const cloneDayjsObject = (obj: Dayjs) => obj.clone();

const cloneSet = (obj: Set<any>) => {
  const newSet = new Set();
  obj.forEach((value) => newSet.add(deepCopy(value)));
  return newSet;
};

const cloneMap = (obj: Map<any, any>) => {
  const newMap = new Map();
  obj.forEach((value, key) => newMap.set(key, deepCopy(value)));
  return newMap;
};

const cloneArrayOrObject = (obj: Array<any> | Record<any, any>) => {
  const newObject = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    // @ts-ignore
    const value = obj[key];
    // @ts-ignore
    newObject[key] = deepCopy(value);
  }
  return newObject;
};

function deepCopy(obj: ObjectOrArray) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (obj instanceof dayjs) {
    const dayjsObj = obj as Dayjs;
    return cloneDayjsObject(dayjsObj);
  }
  if (obj instanceof Set) return cloneSet(obj);
  if (obj instanceof Map) return cloneMap(obj);
  return cloneArrayOrObject(obj);
}

export default deepCopy;
