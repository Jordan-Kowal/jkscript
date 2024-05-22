// biome-ignore lint/suspicious/noExplicitAny: Set content can be anything
const setsAreEqual = (set1: Set<any>, set2: Set<any>): boolean => {
  if (set1.size !== set2.size) return false;
  for (const item of set1) {
    if (!set2.has(item)) return false;
  }
  return true;
};

export default setsAreEqual;
