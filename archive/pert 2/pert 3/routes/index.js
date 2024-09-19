const express = require('express');

const router = express.Router();
const mhsRouter = require("./mahasiswa")

router.use('/mahasiswa', mhsRouter);

//error 404 /url tidak ditemukan
module.exports = router;