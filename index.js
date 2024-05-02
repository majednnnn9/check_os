const express = require("express")
const app = express()
const os = require('os');
app.get('/', (req, res) => {
    res.json({ os: os.platform() })
})


app.listen(5000, () => {
    console.log("runing is server is port    hello world ") 
})