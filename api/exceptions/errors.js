class RecordNotFound extends Error {
    constructor(title, message) {
        super(message);
        this.name = this.constructor.name;
        this.title = title;
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    RecordNotFound
}