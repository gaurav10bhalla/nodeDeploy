const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

app.get("/json", (req, res) => {
    res.send([{
        name:'gaurav bhalla ji',
    }])
})

app.listen(port, ()=>{
    console.log("Server is running on "+ port);
})