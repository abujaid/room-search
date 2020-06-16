const express = require('express')
const app = express()
const connectDB = require('./config/config')

connectDB()
const PORT = 5000;
app.listen(PORT, () => console.log(`Server runing on ${PORT}`))