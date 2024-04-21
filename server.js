const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001

app.listen(PORT, (req, res) =>{
    console.log(`Server running on port: ${PORT}`);
})