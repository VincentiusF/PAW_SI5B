const Buku = require("../model/buku");

const createdBuku = (req, res) => {
    const buku = new Buku({
        judul : req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre,
        creator: req.userData.userid
    });

    // console.log(buku);
    buku.save()
    .then((createdBuku) => {
        res.status(201).json({
            message : "Data berhasil disimpan",
            bookId : createdBuku._id,
            judul : createdBuku.judul,
            penulis : createdBuku.penulis,
            genre : createdBuku.genre
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message :'Internal server error' 
        })
    });
};

const readBuku = (req, res) => {
    Buku.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get data buku",
            bukus : documents
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message : "Internal server error"
        })
    });
};

const deleteBuku = (req, res) => {
    Buku.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "Buku berhasil dihapus",
            result : result
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message : "Internal server error"
        })
    });
};

const updateBuku = (req, res) => {
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
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message : "Internal server error"
        })
    });
};

module.exports = {createdBuku, readBuku, deleteBuku, updateBuku}