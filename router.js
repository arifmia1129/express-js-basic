const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('<h1>This is login route</h1>')
})
router.get('/logout', (req, res) => {
    res.send('<h1>This is logout route</h1>')
})
router.get('/signup', (req, res) => {
    res.send('<h1>This is signup route</h1>')
})

module.exports = router;