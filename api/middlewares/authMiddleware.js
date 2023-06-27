const jwt = require('jsonwebtoken');
const {getUserById} = require("../services/user.service");
const {InvalidCredential, RecordNotFound} = require("../exceptions/errors");

async function authMiddleware(req, res, next) {
    // Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    if (req.baseUrl.includes('admin') || req.originalUrl.includes('user')) {
        if (authHeader) {
            // Extract the token from the Authorization header
            const token = authHeader.split(' ')[1];

            try {
                // Verify the token using your preferred method (e.g., using a secret or public key)
                // Attach the decoded token to the request object for further use
                req.decodedToken = jwt.verify(token, process.env.JWT_SECRET);

                if (req.decodedToken?.user) {
                    const user = await getUserById(req.decodedToken?.user?._id);
                    if (user instanceof RecordNotFound) {
                        next(new InvalidCredential("Invalid Credentials", "Your credentials are not valid"));
                    }
                    req.decodedToken.user = (await user).toObject();
                } else {
                    next(new InvalidCredential("Invalid Credentials", "Your credentials are not valid"));
                }
                // Continue to the next middleware or route handler
                next();
            } catch (error) {
                // Token verification failed
                next(new InvalidCredential("Invalid Credentials", "Your credentials are not valid"));
            }
        } else {
            // Authorization header is missing
            next(new InvalidCredential("Invalid Credentials", "Authorization header missing"))
        }
    } else {
        next();
    }
}

module.exports = authMiddleware;
