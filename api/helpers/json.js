const sendJson = (res, status, data) => {
    return res.status(status).send(data);
}

module.exports = sendJson