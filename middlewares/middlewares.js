const { verifyToken } = require("../utils/helpers");

const authorization = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged in' });
    }

    try {
        const data = verifyToken(token, process.env.JWT_SECRET);
        return next();
    } catch {
        return res.status(403).json({ msg: 'You must be logged in' });
    }
}

module.exports = {
    authorization
}