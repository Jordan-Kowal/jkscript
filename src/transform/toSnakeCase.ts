const toSnakeCase = (s: string): string =>
  s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export default toSnakeCase;
