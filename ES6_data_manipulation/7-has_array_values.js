export default function hasValuesFromArrays(set, array) {
    return array.every(elem => set.has(elem));
}