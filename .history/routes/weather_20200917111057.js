const { response } = require('express')
const fetch = require('node-fetch')

const router = require('express').Router()
require('dotenv').config()


router.get("/", (req, res) => {
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null

    })

})


router.post('/', async (req, res) => {
    const city = req.body.city
    const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`


    try {
        await fetch(url_api)
            .then(res => res.json())
            .then(data => {
                if (data.message === 'city not found') {
                    res.render('index', {
                        city: data.message,
                        des: null,
                        icon: null,
                        temp: null
                    })

                }else{
                    const city = data.name;
                    const des =data.weather[0].description
                }
            })

    } catch (error) {

    }


})





module.exports = router