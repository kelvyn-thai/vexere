const RootController = require('../Root/controller');
const middleware = require('./middleware');
const Users = require('./model');
const Bus = require('../Bus/model');
const Ticket = require('../Ticket/model');



class UsersController extends RootController {
    constructor() {
        super();
        this.router.post('/api/user/login', middleware.validateLogin, middleware.authenticateRequest, this.hanldeLoginUsers.bind(this));
        this.router.get('/api/user/logout', middleware.isAuthenticated, this.hanldeLogoutUsers.bind(this));
        this.router.post('/api/user/register', middleware.validateRegister, this.hanldeRegisterUsers.bind(this));
        this.router.post('/api/user/add-user', this.hanldeAddUsers.bind(this));
        this.router.post('/api/user/find-user', this.hanldeFindUsers.bind(this));
        this.router.post('/api/user/remove-user', this.hanldeRemoveUsers.bind(this));
        this.router.post('/api/user/update-user', middleware.isAuthenticated, middleware.validateUpdate, this.hanldeUpdateUsers.bind(this));
        this.router.post('/api/user/payment-tickets-booked', middleware.isAuthenticated, this.handlePaymentTicketsBooked.bind(this));
        this.router.get("/api/user/authenticate", middleware.isAuthenticated, this.handleAuthenticate.bind(this));
        this.router.post("/api/user/reset-password", this.handleResetPassword.bind(this));
        this.router.post("/api/user/wish-bus", middleware.isAuthenticated, this.handleWishBus.bind(this));
        this.router.post("/api/user/destroy-ticket-booked", middleware.isAuthenticated, this.handleDestroyTicketBooked.bind(this));
        this.router.post('/api/user/change-role', middleware.isAuthenticated, middleware.validateAdmin, this.handleChangeRole.bind(this));
        this.router.post("/api/user/login-by-facebook", this.handleLoginByFacebook.bind(this));
        this.router.post("/api/user/login-by-google",  this.handleLoginByGoogle.bind(this));
        return this.router;
    }

    async handleLoginByFacebook(req, res, next) {
        const { email, accessToken, name } = req.body;
        let user = await Users.findOne({email});
        if (user) {
            req.session.user = user;
            return res.status(200).json({
                payload: user,
                msg: 'Login by facebook success!',
                isError: false
            })
        }
        else {
            const data = {
                email,
                password: await Users.generateHash(accessToken),
                name,
                phone: '0902751467',
                dob: new Date().getTime(),
                address: '227 Nguyen Van Cu Q.5 TP HCM'
            }
            let newUser = await Users.save(data);
            req.session.user = newUser;
            return res.status(200).json({
                payload: newUser,
                msg: 'Login by facebook success!',
                isError: false
            })
        }
    }

    async handleLoginByGoogle(req, res, next) {

        const { accessToken } = req.body;
        const { email, name} = req.body.profileObj;

        let user = await Users.findOne({email});
        if (user) {
            req.session.user = user;
            return res.status(200).json({
                payload: user,
                msg: 'Login by google success!',
                isError: false
            })
        }
        else {
            const data = {
                email,
                password: await Users.generateHash(accessToken),
                name,
                phone: '0902751467',
                dob: new Date().getTime(),
                address: '227 Nguyen Van Cu Q.5 TP HCM'
            }
            let newUser = await Users.save(data);
            req.session.user = newUser;
            return res.status(200).json({
                payload: newUser,
                msg: 'Login by google success!',
                isError: false
            })
        }
    }


    async handleDestroyTicketBooked(req, res, next) {

        const { ticket: ticketDestroyed } = req.body;

        const { time_start, tickets, _id: bus_id } = await Bus.findById(ticketDestroyed['busId'], "_id time_start tickets");

        let ticket = tickets.find(item => item['seat_number'] === ticketDestroyed['seat_number']);

        if (ticket['date_sold'] < time_start) {

            const filter = {
                _id: bus_id,
            }
            const update = {
                $set: {
                    "tickets.$[elem].status": "empty",
                    "tickets.$[elem].date_sold": null,
                },
                $inc: {
                    tickets_booked: -1
                }
            }
            const options = {
                arrayFilters: [
                    {
                        "elem.seat_number": { $eq: ticket['seat_number'] }
                    }
                ]
            }
            await Bus.findOneAndUpdate(filter, update, options);

            ticket = { ...ticketDestroyed };
            ticket.time_destroyed = new Date().getTime();

            const data = {
                $pull: {
                    tickets_booked: {
                        seat_number: ticket['seat_number']
                    }
                },
                $push: {
                    tickets_destroyed: ticket
                }
            }

            const result = await Users.findByIdAndUpdate(req.session.user['_id'], data, { new: true })

            return res.status(200).json({
                payload: result,
                isError: false,
                msg: "Destroy ticket sucesss"
            })
        }
        else {
            return res.json({
                payload: null,
                isError: true,
                msg: "Destroy ticket fail"
            })
        }
    }

    async handleWishBus(req, res, next) {

        let data;
        if (req.body['status'] === "voted") {
            data = {
                $push: {
                    wish_bus: {
                        id: req.body['busId']
                    }
                }
            }
        }
        else if (req.body['status'] === "unvoted") {
            data = {
                $pull: {
                    wish_bus: {
                        id: req.body['busId']
                    }
                }
            }
        }

        const result = await Users.findByIdAndUpdate(req.session['user']._id, data, { new: true });

        return res.json({
            payload: result,
            status: 200,
            msg: "Request wish bus success",
            isError: false
        })

    }

    async handleResetPassword(req, res, next) {

        const new_password = req.body['new_password'];
        const old_password = req.body['old_password'];

    }

    async hanldeLogoutUsers(req, res, next) {
        await req.session.destroy();
        return res.json({
            payload: {
                msg: "Logout success"
            },
            msg: "",
            isError: false,
            code: 200
        })
    }
    async handleAuthenticate(req, res, next) {

        return res.json({
            payload: await Users.findById(req.session.user._id),
            code: 200,
            isError: false,
            msg: "User is authenticated"
        })
    }


    async handlePaymentTicketsBooked(req, res, next) {
        const user = req.session.user;
        const { tickets } = req.body;
        for (let ticket of tickets) {
            ticket.id = Users.generatorObjectId();
            ticket.date_created = new Date().getTime();
            const bus_id = ticket['busId'];
            const seat_numnber = ticket['seat_number'];
            const filter = {
                _id: bus_id,
            }
            const update = {
                $set: {
                    "tickets.$[elem].status": "booked",
                    "tickets.$[elem].date_sold": ticket['date_created'],
                    "tickets.$[elem].id": ticket['id'],
                },
                $inc: {
                    tickets_booked: 1
                }
            }
            const options = {
                arrayFilters: [
                    {
                        "elem.seat_number": { $eq: seat_numnber }
                    }
                ]
            }
            await Bus.findOneAndUpdate(filter, update, options);
        }

        const data = {
            $push: {
                tickets_booked: tickets
            }
        }
        const userUpdated = await Users.findByIdAndUpdate(user['_id'], data, { new: true });
        return res.json({
            payload: userUpdated,
            msg: "Payment success",
            code: 200,
            isError: false,
        })
    }


    async hanldeHistoryTicketsBooked(req, res, next) {

        try {
            const _id = req.body.id || '';


            const docs = await Ticket.find({ 'userID': _id }, '', '');
            if (docs) {
                return res.json({
                    payload: docs,
                    msg: 'Get list ticket success',
                    error: false
                })
            }
            else {
                return res.json({
                    payload: docs,
                    msg: 'Get list ticket fail',
                    error: true
                })
            }

        } catch (error) {
            return res.json({
                payload: null,
                msg: 'Get list ticket fail',
                error: true
            })
        }
    }
    async hanldeAddUsers(req, res, next) {
        var authenticateResult = await req.isAuthenticated()

        if (!authenticateResult) {
            return res.json({
                payload: null,
                msg: "You don't have permission to access",
                error: true
            })
        }
        if (!req.user.role != 'admin') {
            return res.json({
                payload: null,
                msg: "You don't have permission to access",
                error: true
            })
        }

        try {

            const data = {
                email: req.body.email,
                password: Users.generateHash(req.body.password),
                phone: req.body.phone,
                address: req.body.address,
                name: req.body.name,
                role: req.body.role
            }
            const result = await Users.save(data);

            if (result) {
                return res.json({
                    payload: result,
                    msg: 'Add user success',
                    error: false
                })
            }
            else {
                return res.json({
                    payload: null,
                    msg: 'Add user fail',
                    error: true
                })
            }
        } catch (error) {
            return res.json({
                payload: null,
                msg: 'Add user fail',
                error: true
            })
        }
    }

    async hanldeUpdateUsers(req, res, next) {
        const { _id } = req.session.user;
        const data = {
            phone: req.body.phone,
            address: req.body.address,
            name: req.body.name,
            dob: req.body.dob,
            role: req.body.role
        }

        const result = await Users.findByIdAndUpdate(_id, data, { new: true });

        if (result) {

            return res.json({
                payload: result,
                msg: 'Update user success',
                isError: false,
                status: 200
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Update user fail',
                isError: true,
                status: 400
            })
        }
    }

    async hanldeRemoveUsers(req, res, next) {
        var authenticateResult = await req.isAuthenticated()

        if (!authenticateResult) {
            return res.json({
                payload: null,
                msg: "You don't have permission to access",
                error: true
            })
        }
        if (!req.user.role != 'admin') {
            return res.json({
                payload: null,
                msg: "You don't have permission to access",
                error: true
            })
        }

        try {
            const { _id } = req.body;

            const result = await Users.findByIdAndDelete(_id);

            if (result) {
                return res.json({
                    payload: result,
                    msg: 'Remove user success',
                    error: false
                })
            }
            else {
                return res.json({
                    payload: null,
                    msg: 'Remove user fail',
                    error: true
                })
            }
        } catch (error) {
            return res.json({
                payload: null,
                msg: 'Remove user fail',
                error: true
            })
        }

    }
    async hanldeFindUsers(req, res, next) {

        try {
            const conditions = req.body.conditions || {};
            const projection = req.body.projection || '';
            const options = req.body.options || {};
            const docs = await Users.find(conditions, projection, options);
            if (docs) {
                return res.json({
                    payload: docs,
                    msg: 'Get list user success',
                    error: false
                })
            }
            else {
                return res.json({
                    payload: null,
                    msg: 'Get list user fail',
                    error: true
                })
            }

        } catch (error) {
            return res.json({
                payload: null,
                msg: 'Get list user fail',
                error: true
            })
        }
    }
    async hanldeRegisterUsers(req, res, next) {

        const data = {
            email: req.body.email,
            password: await Users.generateHash(req.body.password),
            phone: req.body.phone || "",
            address: req.body.address || "",
            name: req.body.name,
            dob: req.body.dob || 315507600000,
            role: 'customer'
        }


        const result = await Users.save(data)

        if (result) {
            return res.json({
                payload: result,
                msg: 'Register complete!',
                isError: false
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Email address already exists.',
                isError: true
            })
        }
    }


    async hanldeLoginUsers(req, res, next) {
        req.session.user = req.user;
        return res.json({
            payload: req.user,
            msg: "Login success!",
            isError: false
        })
    }

    async handleChangeRole(req, res, next) {
        const result = await Users.findByIdAndUpdate(req.body._id, { role: req.body.role }, { new: true });

        if (result) {

            return res.json({
                payload: result,
                msg: 'Update role success',
                isError: false,
                status: 200
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Update role fail',
                isError: true,
                status: 400
            })
        }
    }

    static getUsersController() {
        return new UsersController();
    }


}




module.exports = UsersController.getUsersController();
