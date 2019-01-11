const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat_number: {type: String, required: true},
    price: {type: String},
    coupon: {type: Array},
    /**
     * @property status
     * "booked", "empty"
     */
    status: {type: String},
    bus_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Bus'},
    own: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date_updated: {type: Number},
    date_created: {type: Number},
});

module.exports = ticketSchema;