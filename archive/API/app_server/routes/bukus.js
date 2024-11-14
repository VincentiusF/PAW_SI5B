var express = require('express');
var router = express.Router();

const BukuController = require('../controller/buku')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

//format JSON
//insert
router.post('/', BukuController.createdBuku);
//select
router.get("/", BukuController.readBuku);
//delete
router.delete('/:id', BukuController.deleteBuku);
//update
router.put('/:id', BukuController.updateBuku);

module.exports = router;
