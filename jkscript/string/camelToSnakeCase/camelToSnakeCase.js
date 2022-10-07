function camelToSnakeCase(s) {
  return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export default camelToSnakeCase;
