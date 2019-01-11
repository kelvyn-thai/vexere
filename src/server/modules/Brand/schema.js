const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    _id: Schema.Types.ObjectId,
    code: {type: String, unique: true},
    name: {type: String},
    /**
     * Routes will run
     * [{
     * from: {type: Object, required: true}, //code city
     * to: {type: Object, required: true}, //code city
     * }]
     */
    routes: {type: Array},
    date_created: {type: Number},
    date_updated: {type: Number},
    total_driver: {type: Number},
    total_bus: {type: Number}
})

module.exports = brandSchema;
