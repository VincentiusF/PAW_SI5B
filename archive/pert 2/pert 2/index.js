const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log('Server started on port');
});

app.get('/about', (req, res) => {
    res.send('Halaman About');
});

app.get('/halaman kontak perusahaan', (req, res) => {
    res.send("halaman kontak perusahaan");
});

//middleware
app.use('*', (req,res) =>{
    res.status(404);
    res.send('404, Halaman tidak ditemukan');

});
