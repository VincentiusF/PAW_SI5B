const express = require('express');
const app = express();
const port =3000;

const route = require('./routes/index');

app.get('/', (req, res) => {
    res.send('Halo dunia!');
});

app.use(route);

// app.get('/mahasiswa', (req, res) =>{
//     res.send('get data mahasiswa');
// });

// app.put('/mahasiswa', (req, res) => {
//     res.send('put mahasiswa' + req.params.mpm);
// });

// app.post('/mahasiswa', (req, res) => {
//     res.send('post mahasiswa' + req.params.npm);
// });

// app.delete('/mahaisiswa', (req, res) => {
//     res.send('delete mahasiswa' + req.params.npm);
// });

//Run app, then load http://localhost:port in a browser to see the output.

app.listen(port, () => {
    console.log('Example app listening on port port! ' +port);
});
