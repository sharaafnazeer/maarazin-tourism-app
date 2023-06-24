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

function generateReferenceNumber() {
    const timestamp = Date.now().toString(); // Get the current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random alphanumeric string

    return `${randomString}-${timestamp}`;
}

module.exports = {
    getAllCombinations,
    generateReferenceNumber,
}
