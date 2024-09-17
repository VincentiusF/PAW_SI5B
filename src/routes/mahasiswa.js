const express = require('express');
const mahasiswaRouter = express.Router();

mahasiswaRouter
.route('/')
.get((req, res) =>{
    res.send('get data mahasiswa');
})
.post((req, res) => {
    res.send('post mahasiswa' + req.params.npm);
});

mahasiswaRouter
.route('/:npm')
.put((req, res) => {
    res.send('put mahasiswa' + req.params.mpm);
})
.delete((req, res) => {
    res.send('delete mahasiswa' + req.params.npm);
});

mahasiswaRouter.route('/kelas')
.get((req, res)=> {
    const kelas  = req.query.idkelas;
    res.send('kelasnya adalah' + kelas);
});
module.exports = mahasiswaRouter