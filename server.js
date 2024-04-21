// dependencies
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3006;

app.get('/', (req, res)=>{
console.log('test API endpoint')
res.end('Your api is working, you are at the home page');
});

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port: ${PORT}`);
})