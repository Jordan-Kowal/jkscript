const toSnakeCase = (s) =>
  s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export default toSnakeCase;
