function toSnakeCase(s) {
  return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export default toSnakeCase;
