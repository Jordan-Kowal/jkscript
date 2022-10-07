import { camelToSnakeCase } from '../../string';
import flattenObject from '../flattenObject';

const objectToFlatFormData = (data, toSnake = true) => {
  const flatData = flattenObject(data);
  const formData = new FormData();
  Object.keys(flatData).forEach((key) => {
    const finalKey = toSnake ? camelToSnakeCase(key) : key;
    formData.set(finalKey, flatData[key]);
  });
  return formData;
};

export default objectToFlatFormData;
