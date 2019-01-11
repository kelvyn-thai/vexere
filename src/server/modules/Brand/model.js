const RootModel = require('../Root/model');
const schema = require('./schema');

class BrandModel extends RootModel {
    constructor() {
        super();
        this.setModel('brand', schema);
    }
    static getBrandModel() {
        return new BrandModel();
    }
}

module.exports = BrandModel.getBrandModel();