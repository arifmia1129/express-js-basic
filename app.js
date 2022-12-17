const express = require("express");

const app = express();


app.get('/about', (req, res) => {
    res.send('<h1>This is a about page</h1>')
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