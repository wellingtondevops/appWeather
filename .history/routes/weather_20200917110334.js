const { response } = require('express')
const fetch = require('node-fetch')

const router = require('express').Router()
require('dotenv').config()


router.get("/", (req, res)=>{
    res.render('index')

})


router.post('/', (req, res)=>{
    const city = req.body.city
    const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`

    fetch(url_api)
    .then(res=> res.json())
    .then(data => console.log(data))
})





module.exports = router