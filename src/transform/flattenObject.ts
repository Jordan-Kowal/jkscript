import { isObject } from "../checks";

const recursivelySetFlatData = (
  flatData: Record<any, any>,
  currentPath: string,
  value: any,
) => {
  // We skip undefined value because formData will stringify it as 'undefined'
  if (value === undefined) return;
  // File: Set value
  if (value instanceof File) {
    flatData[currentPath] = value;
    return;
  }
  // Array: Add index to path for each value and recurse
  if (Array.isArray(value)) {
    value.forEach((orderedValue, i) => {
      recursivelySetFlatData(flatData, `${currentPath}[${i}]`, orderedValue);
    });
    return;
  }
  // Object: Add key to path for each value and recurse
  if (isObject(value)) {
    Object.keys(value).forEach((key) => {
      recursivelySetFlatData(flatData, `${currentPath}[${key}]`, value[key]);
    });
    return;
  }
  // All other cases: Set value
  flatData[currentPath] = value;
};

const flattenObject = (data: Record<any, any>): Record<any, any> => {
  const flatData = {};
  Object.keys(data).forEach((key) => {
    recursivelySetFlatData(flatData, key, data[key]);
  });
  return flatData;
};

export default flattenObject;
