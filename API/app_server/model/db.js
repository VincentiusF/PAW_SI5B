const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/dbbuku'
    // 'mongodb://localhost:27017/dbbuku'
    // 'mongodb+srv://mdp:Vf29122003@cluster0.eyoha.mongodb.net/dbbuku?retryWrites=true&w=majority&appName=Cluster0'
  ).then(() => {
    console.log('Connected to database');
  }).catch(() => {
    // console.log('App starting error:', err.stack);
    console.log("Connection failed");
  });
  