const express = require('express')
const router = express.Router()
const birdHome = require("../controller/birdHome");
const about = require("../controller/about")

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/bird', (req, res) => {
    birdHome.getBirdHome(req,res);
})
// define the about route
router.get('/about', (req, res) => {
    about.getAbout(req,res);
})

module.exports = router