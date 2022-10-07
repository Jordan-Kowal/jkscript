export default function getNextElement(array, currentElement) {
  const currentIndex = array.indexOf(currentElement);
  if (currentIndex === -1) return null;
  const newIndex = currentIndex === array.length - 1 ? 0 : currentIndex + 1;
  return array[newIndex];
}
