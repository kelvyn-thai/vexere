const User = require('./model');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const configLocalStrategy = {
    usernameField: 'email',
    passwordField: 'password',
}

passport.use(new LocalStrategy(configLocalStrategy,
    async (username, password, done) => {
        const user = await User.findOne({ email: username });
        if (!user) {
            return done(null, false);
        }
        if (await User.comparePassword(password, user['password'])) {
            return done(null, user);
        }
        else {
            return done(null, false)
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user);
});

module.exports = {
    authenticateRequest: (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err)
                throw err
            if (!user) {
                return res.json({
                    payload: null,
                    msg: 'Authenticated fail!',
                    isError: true,
                    status: 404
                })
            }
            req.logIn(user, function (err) {
                if (err)
                    throw err
                return next();
            });
        })(req, res, next)
    },
    validateRegister: (req, res, next) => {

        req.body.dateOfBirth = new Date(parseInt(req.body['dob']));
        req.checkBody('email', 'Enter a valid email address.').isEmail();
        req.checkBody('password', 'Password length must be between [8-64]').isLength({ min: 8, max: 64 }),
        req.checkBody('name', `Field 'name' is required!`).notEmpty();
        req.checkBody('phone', `Mobile phone is not legal`).isMobilePhone(['vi-VN']);
        req.checkBody('address', `Field 'address' is required`).notEmpty();
        req.checkBody('dateOfBirth', `Date of birth is not legal!`).isDate();

        const errors = req.validationErrors();
        if (errors) {
            return res.json({
                payload: errors,
                isError: true,
                msg: "Validate request fail!",
                status: 400
            })
        }
        else {
            next();
        }
    },
    validateLogin: (req, res, next) => {
        
        req.checkBody('email', 'Enter a valid email address.').isEmail();
        req.checkBody('password', 'Password length must be between [8-64]').isLength({ min: 8, max: 64 });
        const errors = req.validationErrors();
        if (errors) {
            return res.json({
                payload: errors,
                isError: true,
                msg: "Validate request fail!",
                status: 400
            })
        }
        else {
            next();
        }
    },
    validateUpdate: (req, res, next) => {
        
        req.body.dateOfBirth = new Date(parseInt(req.body['dob']));
        req.checkBody('name', `Field 'name' is required!`).notEmpty();
        req.checkBody('phone', `Mobile phone is not legal`).isMobilePhone(['vi-VN']);
        req.checkBody('address', `Field 'address' is required`).notEmpty();
        req.checkBody('dateOfBirth', `Date of birth is not legal!`).isDate();

        const errors = req.validationErrors();
        if (errors) {
            return res.json({
                payload: errors,
                isError: true,
                msg: "Validate request fail!",
                status: 400
            })
        }
        else {
            next();
        }

    },
    isAuthenticated: (req, res, next) => {
        if(req.session.user){
            next();
        }
        else{
            return res.json({
                payload: null,
                isError: true,
                msg: "Authenticated fail!",
                status: 404
            })
        }
    },
    validateAdmin: (req, res, next) => {
        if (req.session.user && req.session.user.role == 'admin') {
            next();
        }
        else{
            return res.json({
                payload: req.session.user,
                isError: true,
                msg: "Only admins are accepted for this action",
            })
        }
    },
    validateManager: (req, res, next) => {
        if (req.session.user && req.session.user.role == 'manager') {
            next();
        }
        else{
            return res.json({
                payload: null,
                isError: true,
                msg: "Only managers are accepted for this action",
            })
        }
    },
    facebookLogin: async (req, res, next) => {
        
    },

    googleLogin: (req, res, next) => {

    }
}