const express = require('express');
const router = express.Router();

router.use('/',(req, res) => {
    //format data JSON 
    const data ={
        caption : 'Mahasiswa',
        layout : 'layout/main-layout',
        data : [
            {
                npm : "2226240032",
                nama : "Vincent"
            },
            {
                npm : "2226240033",
                nama : "Darren"
            },
            {
                npm : "2226240034",
                nama : "Alex"
            },
        ]
    };
    res.render('index', data);
    //menuju ke views/index.js
});

module.exports = router;