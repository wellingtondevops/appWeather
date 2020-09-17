const express = require('express')
const app = express()

//Import Routes
const weatherRoute = require('./routes/weather')

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>console.log(`Server starting at port ${PORT}`))