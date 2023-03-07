import flattenObject from './flattenObject';
import toSnakeCase from './toSnakeCase';

const objectToFlatFormData = (data, toSnake = true) => {
  const flatData = flattenObject(data);
  const formData = new FormData();
  Object.keys(flatData).forEach((key) => {
    const finalKey = toSnake ? toSnakeCase(key) : key;
    formData.set(finalKey, flatData[key]);
  });
  return formData;
};

export default objectToFlatFormData;
