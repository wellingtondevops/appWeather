const express = require('express')
const app = express()

//Import Routes
const weatherRoute = require('./routes/weather')

// Use view Engine
app.set('view engine'.'ejs')

//Middleare Route

app.use('/', weatherRoute)

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>console.log(`Server starting at port ${PORT}`))