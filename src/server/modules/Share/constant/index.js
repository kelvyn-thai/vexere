/**
 * Declare constants variable of App
 */
const { isValidDate } = require('../helper');

exports.DB = "mongodb://ec1818:weareec1818@ds157853.mlab.com:57853/ec1818"
exports.CORS_OPTIONS = {
    origin: function (origin, callback) {
        callback(null, true)
    },
    credentials: true
}
exports.VALIDATOR_CUSTOM = {
    customValidators: {
        isDate: isValidDate
    }
}

exports.SESSTION_OPTIONS = {
    secret: "$2y$12$SgCXbm6rFXRnis9ovP89MO2wVAAAFAJKmHNlnhDT8P9dqp80SV.fG",
    resave: true,
    saveUninitialized: true,
}