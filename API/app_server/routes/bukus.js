var express = require('express');
const checkAuth = require("../middleware/check-auth");
var router = express.Router();

const BukuController = require('../controller/buku');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

//format JSON
//insert
router.post('/', checkAuth, BukuController.createdBuku);
//select
router.get("/", checkAuth, BukuController.readBuku);
//delete
router.delete('/:id', checkAuth, BukuController.deleteBuku);
//update
router.put('/:id', checkAuth, BukuController.updateBuku);

module.exports = router;
