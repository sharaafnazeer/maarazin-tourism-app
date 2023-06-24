const buildAuthHeader = (token) => {
    return {
        headers: {'Authorization': `Bearer ${token}`}
    };
}

module.exports = buildAuthHeader;