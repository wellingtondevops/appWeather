const router = require('express').Router()


router.get("/", (req, res)=>{
    res.send("Hello Express")
})


module.exports = router