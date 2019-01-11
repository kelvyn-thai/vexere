const RootModel = require('../Root/model');
const schema = require('./schema');

class BusModel extends RootModel {
    constructor(){
        super();
        this.setModel('bus', schema);
    }
    static getBusModel(){
        return new BusModel();
    }
}


module.exports = BusModel.getBusModel();
