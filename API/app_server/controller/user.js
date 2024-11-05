const User = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

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
                // Send an immediate response if the user does not exist
                return res.status(401).json({
                    message: "Auth failed, email does not exist"
                });
            }

            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then((passwordMatch) => {
            if (!passwordMatch) {
                // Send an immediate response if the password is incorrect
                return res.status(401).json({
                    message: "Auth failed, password incorrect"
                });
            }

            // Generate JWT if authentication is successful
            const token = jwt.sign(
                { email: fetchedUser.email, userid: fetchedUser._id },
                "kuncisi5bpaw",
                { expiresIn: "1h" }
            );

            res.status(200).json({
                message: "Auth successful",
                token: token,
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
