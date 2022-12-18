const express = require("express");
const morgan = require('morgan');

const app = express();

// app.use(morgan('dev'));


const customMiddleware = (req, res, next) => {
    if (req.url === '/help') {
        return res.json({
            success: false,
            message: 'This page is blocked by admin'
        })
    }
    next();
}

const tinyLogger = () => {
    return (req, res, next) => {
        console.log(`${req.method}-${req.url}`);
        next();
    }
}

const middleware = [customMiddleware, tinyLogger()];

app.use(middleware);

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('<h1>This is login route</h1>')
})
router.get('/logout', (req, res) => {
    res.send('<h1>This is logout route</h1>')
})
router.get('/signup', (req, res) => {
    res.send('<h1>This is signup route</h1>')
})


app.use('/user', router);

app.get('/about', morgan('dev'), (req, res) => {
    // res.send('<h1>This is a about page</h1>')
    res.json({
        success: true,
        message: 'This is about page'
    })
})

app.get('/help', (req, res) => {
    res.send('<h1>This is a help page</h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>I am simple server</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>')
})


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
})