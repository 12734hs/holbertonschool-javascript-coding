export default function appendToEachArrayValue(array, appendString) {
    for (let [index, element] of array.entries()) {
    array[index] = appendString + element;
  }
  return array;
}