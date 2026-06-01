export default function appendToEachArrayValue(array, appendString) {
    const dict = array.entries()
    for (let [index, element] of dict) {
    array[index] = appendString + element;
  }
  return array;
}