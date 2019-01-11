const RootModel = require('../Root/model');
const Schema = require('./schema');


class TicketModel extends RootModel {
    constructor(){
        super();
        this.setModel('Ticket', Schema);
    }

    static getTicketModel() {
        return new TicketModel();
    }
}

module.exports = TicketModel.getTicketModel();