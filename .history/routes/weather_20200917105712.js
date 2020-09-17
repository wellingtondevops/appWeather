const router = require('express').Router()
require('dotenv').config


router.get("/", (req, res)=>{
    res.render('index')

})


router.post('/', (req, res)=>{
    const city = req.body.city
    const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
})





module.exports = router