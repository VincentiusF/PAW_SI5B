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

router.get("/",(req, res) => {
    Buku.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get data buku",
            bukus : documents
        });
    });
})

router.delete('/:id', (req, res) => {
    Buku.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "Buku berhasil dihapus",
            result : result
        });
    });
});

router.put('/:id', (req, res) => {
    const buku = new Buku({
        _id : req.params.id,
        judul : req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre
    });

    Buku.updateOne({_id : req.params.id}, buku)
    .then((hasil)=>{
        res.status(200).json({
            message : "Update berhasil",
            result : hasil
        });
    });
});

module.exports = router;
