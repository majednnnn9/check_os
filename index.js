const express = require("express")
const app = express()
const os = require('os');
app.get('/', (req, res) => {
    res.json({ os: os.platform() })
})

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
    console.log("runing is server is port " + PORT)
})
