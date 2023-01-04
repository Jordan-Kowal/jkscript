export default function isEmptyArray(obj) {
  return Array.isArray(obj) && obj.length === 0;
}
