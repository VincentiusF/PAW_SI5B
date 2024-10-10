var express = require('express');
var router = express.Router();

const Buku = require("../model/buku");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

//format JSON
router.post('/', (req, res) => {
    const buku = new Buku({
        judul : req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre
    });

    console.log(buku);
    buku.save().then((createdBuku) => {
        res.status(201).json({
            message : "Data berhasil disimpan",
            bookId : createdBuku._id,
            judul : createdBuku.judul,
            penulis : createdBuku.penulis,
            genre : createdBuku.genre
        });
    });   
});


module.exports = router;
