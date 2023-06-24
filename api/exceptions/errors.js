class RecordNotFound extends Error {
    constructor(title, message) {
        super(message);
        this.name = this.constructor.name;
        this.title = title;
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}

class RecordFound extends Error {
    constructor(title, message) {
        super(message);
        this.name = this.constructor.name;
        this.title = title;
        this.statusCode = 400;
        Error.captureStackTrace(this, this.constructor);
    }
}

class InvalidCredential extends Error {
    constructor(title, message) {
        super(message);
        this.name = this.constructor.name;
        this.title = title;
        this.statusCode = 401;
        Error.captureStackTrace(this, this.constructor);
    }
}

class InvalidOperation extends Error {
    constructor(title, message) {
        super(message);
        this.name = this.constructor.name;
        this.title = title;
        this.statusCode = 403;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    RecordNotFound,
    RecordFound,
    InvalidCredential,
    InvalidOperation
}