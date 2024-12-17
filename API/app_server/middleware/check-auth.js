const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "kuncisi5bpaw");
        req.userData = { email: decodedToken.email, userid: decodedToken.userId };
        // jwt.verify(token, "kuncisi5bpaw");
        next();
    } catch (error) {
        res.status(401).json({ message : "Auth failed! "});
    }
};