const RootModel = require('../Root/model');
const schema = require('./schema');
const bcrypt = require('../Share/library/Bcrypt');

class UsersModel extends RootModel {
    constructor() {
        super();
        this.setModel('Users', schema);
    }

    static getUsersModel() {
        return new UsersModel();
    }

    async generateHash(password) {
        return await bcrypt.hash(password);
    };

    async comparePassword(data, hash){
        return await bcrypt.compare(data, hash);
    }
}


module.exports = UsersModel.getUsersModel();