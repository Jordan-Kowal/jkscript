function toCamelCase(s) {
  return s.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );
}

export default toCamelCase;
