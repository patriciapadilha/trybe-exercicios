const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
    const token = req.hearders.authorization;

    if (!token){
        const err = new Error('Token not fount');
        err.statusCode = 401;
        return next(err);
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);

        /* Armazenamos os dados da pessoa no objeto de request */
        req.user = payload
        return next();
    } catch (err) {
        err.statusCode = 401;
        return next(err);
    }
};