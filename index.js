const express = require('express');
const app = express();
const pug = require('pug');
const cors = require('cors');
const port = 8000;
const fs = require('fs');

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);
app.use(cors())

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    res.render('main');
});



app.listen(port, () => {
    console.log("server running!");
})