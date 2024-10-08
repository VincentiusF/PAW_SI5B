const mongoose = require("mongoose");

const bukuSchema = new mongoose.Schema({
    judul: {type: String, require : true},
    penulis : {type: String, require : true},
    genre : [{type: String, require : true}]
});


module.exports = mongoose.model("Buku", bukuSchema);