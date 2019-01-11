const RootController = require('../Root/controller');
const Ticket = require('./model');
const middleware = require('./middleware');

class TicketController extends RootController {
    constructor() {
        super();
        this.router.get('/api/ticket/find/:params', this.handleFindTicket.bind(this));
        this.router.post('/api/ticket/add-ticket', this.addTicketHandler.bind(this));
        this.router.post('/api/ticket/find-ticket', this.findTicketHandler.bind(this));             
        this.router.post('/api/ticket/update-ticket', this.updateTicketHandler.bind(this));
        this.router.post('/api/ticket/remove-ticket', this.removeTicketHandler.bind(this));
        return this.router;
    }

    async handleFindTicket(req, res, next) {


        const { conditions, projection, options } = JSON.parse(req.params['params']);

        const docs = await Ticket.find(conditions, projection, options);

        if (docs) {
            return res.json({
                payload: docs,
                msg: 'Get list ticket success',
                isError: false
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Get list ticket fail',
                isError: true
            })
        }
    }

    async addTicketHandler(request, response, next) {
        try {
            const data = request.body;
            const result = await Ticket.save(data);
            if (result) {
                return response.json({
                    payload: result,
                    msg: 'Successfully added a ticket',
                    isError: false
                });
            }
            else {
                return response.json({
                    payload: null,
                    msg: 'Cannot add this ticket',
                    isError: true
                });
            }
        }
        catch (e) {
            return response.json({
                payload: null,
                msg: 'An exception occurred. Detail: ' + e,
                isError: true
            });
        }
    }

    async findTicketHandler(request, response, next) {
        try {
            const conditions = request.body.conditions || {};
            const projection = request.body.projection || '';
            const options    = request.body.options || {};

            const result = await Ticket.find(conditions, projection, options);
            if (result) {
                return response.json({
                    payload: result,
                    msg: 'Successfully found ticket',
                    isError: false
                });
            }
            else {
                return response.json({
                    payload: null,
                    msg: 'Cannot find any ticket',
                    isError: true
                });
            }
        }
        catch (e) {
            return response.json({
                payload: null,
                msg: 'An exception occurred. Detail: ' + e,
                isError: true
            });
        }
    }

    async updateTicketHandler(request, response, next) {
        try {
            const {_id} = request.body;
            const data = {...request.body};
            const result = await Ticket.findByIdAndUpdate(_id, data);
            if (result) {
                return response.json({
                    payload: result,
                    msg: 'Successfully updated a ticket',
                    isError: false
                });
            }
            else {
                return response.json({
                    payload: null,
                    msg: 'Cannot update this ticket',
                    isError: true
                });
            }
        }
        catch (e) {
            return response.json({
                payload: null,
                msg: 'An exception occurred. Detail: ' + e,
                isError: true
            });
        }
    }

    async removeTicketHandler(request, response, next) {
        try {
            const {_id} = request.body;
            const result = await Ticket.findByIdAndDelete(_id);
            if (result) {
                return response.json({
                    payload: result,
                    msg: 'Successfully deleted a ticket',
                    isError: false
                });
            }
            else {
                return response.json({
                    payload: null,
                    msg: 'Cannot delete this ticket',
                    isError: true
                });
            }
        }
        catch (e) {
            return response.json({
                payload: null,
                msg: 'An exception occurred. Detail: ' + e,
                isError: true
            });
        }
    }

    static getTicketController () {
        return new TicketController();
    }
}

module.exports = TicketController.getTicketController();