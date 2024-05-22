const toCamelCase = (s: string): string =>
  s.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", ""),
  );

export default toCamelCase;
