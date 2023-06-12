function getAllCombinations(arr) {
    const result = [];

    function generateCombinations(currentArr, index) {
        if (index === arr.length) {
            result.push(currentArr);
            return;
        }

        generateCombinations(currentArr.concat(arr[index]), index + 1);
        generateCombinations(currentArr, index + 1);
    }

    generateCombinations([], 0);

    return result;
}

module.exports = {
    getAllCombinations,
}
