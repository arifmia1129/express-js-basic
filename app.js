const express = require("express");
const morgan = require('morgan');

const app = express();

// app.use(morgan('dev'));


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