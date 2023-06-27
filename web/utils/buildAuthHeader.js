const buildAuthHeader = (token) => {
    return {
        headers: {'Authorization': `Bearer ${token}`}
    };
}
const buildAuthMultipartHeader = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'multipart/form-data',
        }
    };
}

module.exports = {
    buildAuthHeader,
    buildAuthMultipartHeader
};