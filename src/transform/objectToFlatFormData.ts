import flattenObject from "./flattenObject";
import toSnakeCase from "./toSnakeCase";

const objectToFlatFormData = (data: Record<any, any>, toSnake = true) => {
  const flatData = flattenObject(data);
  const formData = new FormData();
  Object.keys(flatData).forEach((key) => {
    const finalKey = toSnake ? toSnakeCase(key) : key;
    const value = flatData[key];
    formData.set(finalKey, value);
  });
  return formData;
};

export default objectToFlatFormData;
