const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const passport = require('passport');
const validator = require('express-validator');
const port = process.env.PORT || 3000;
const routers = require('./modules/Root/composeRouter');
const preloader = require('./modules/Preloader');
const {SESSTION_OPTIONS , CORS_OPTIONS, VALIDATOR_CUSTOM } = require('./modules/Share/constant');
require('dotenv').config();
// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(cors(CORS_OPTIONS));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(session(SESSTION_OPTIONS));
app.use(passport.initialize());
app.use(passport.session());
app.use(validator(VALIDATOR_CUSTOM));
app.use(routers);
preloader.initApp();

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: 'Internal Server Error',
        details: err
    })
});


app.get('*', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vexere</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `)
});


app.listen(port, () => console.log('Server start at port ', port));