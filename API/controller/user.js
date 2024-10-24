const User = require("../model/user");
const bcrypt = require('bcrypt');

const signUp = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                email: req.body.email,
                password: hash
            });

            return user.save();
        })
        .then((result) => {
            res.status(201).json({
                message: "User Created"
                // result: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        });
};

const login = (req, res) => {
    let fetchedUser;

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed, email does not exist"
                });
            }

            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then((result) => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed, password incorrect"
                });
            }

            // Here, you can generate a token or respond with success
            res.status(200).json({
                message: "Auth successful",
                user: fetchedUser
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        });
};

module.exports = { signUp, login };
