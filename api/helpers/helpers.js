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

function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
    str = str.toLowerCase(); // convert string to lowercase
    str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
    return str;
}

module.exports = {
    getAllCombinations,
    generateReferenceNumber,
    slugify,
}
