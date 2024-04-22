// dependencies
const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/index');
const PORT = process.env.PORT || 3006;

//middlewares
//serve static files from 'public' folder
app.use(express.static('public'));
//parse json and urlencoded data
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })) 

// api route management
app.use('/api', api) ;

// when user navigate to homepage redundance
app.get('/', (req, res)=>{
console.log('Homepage');
res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


app.get('/notes', (req, res)=>{
console.log('Notes page');
res.sendFile(path.join(__dirname, 'public', 'notes.html'))
});


app.listen(PORT, () =>{
    console.log(`Server up on http://localhost:${PORT}`);
});