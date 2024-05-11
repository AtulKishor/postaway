export default (array, pageNumber, pageSize = 5) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, array.length);
    return array.slice(startIndex, endIndex);
}
