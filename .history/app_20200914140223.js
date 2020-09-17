const express = require('express')
const app = express()

//Import Routes
const weatherRoute = require('./routes/weather')

//Middleare Route

app.use('/', weatherRoute)

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>console.log(`Server starting at port ${PORT}`))