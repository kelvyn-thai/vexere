const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const busSchema = new Schema({
    _id: Schema.Types.ObjectId,
    from: {type: Object, required: true}, //code city
    to: {type: Object, required: true}, //code city
      /**
     * @property time_start & time_end
     * Date.getTime()
     */
    time_start: {type: Number, required: true},
    time_end: {type: Number, required: true},
    /**
     * @property depature & arrival
     * Array object
     * {
     *  place: {type: String},
     *  time: {type: Number},
     *  type: {type: String}, // 'transship' or 'address'
     * }
     * 
     */
    depature: {type: Array, required: true},
    arrival: {type: Array, required: true},
   /**
     * @property brand
     * Object
     * {
     *  code: {type: String, unique},
     *  name: {type: String}
     * }
     */
    brand: {type: Object, required: true}, //code brand
    /**
     * @property services
     * Object
     * {
     *  has_wifi_free: {type: Boolean},
     *  has_water: {type: Boolean},
     *  has_transship: {type: Boolean},
     *  has_freezer: {type: Boolean},
     *  has_breaks: {type: Boolean},
     * }
     */
    services: {type: Object}, 
    /**
     * @property bus_type
     * String: normal, vip
     * {
      type: String,
      describe: String
    }
     */
    bus_type: {type: Object},
    /**
     * @property seat_type
     * String: ac, reclining
     * {
      type: String,
      describe: String
    }
     */
    seat_type: {type: Object},
    /**
     * @property comments
     * Object
     * {
     *  author: {type: mongoose.Schema.Types.ObbjectId},
     *  comment: {type: String},
     *  date_created: {type: Number}
     *  rating: {
     *   quality: {type: Number},
     *   on_time: {type: Number},
     *   service: {type: Number},
     *   total: {type: Number},
     *   date_created: {type: Number},
     *  }
     * }
     */
    comments: {type: Array},
    /**
     * @property cancellation_policy
     * Object
     * {
     *  time: {type: String}
     *  fees: {type: String}
     * }
     */
    cancellation_policy:{type: Array, required: true},    
    /**
     * {
     *  total_rating: {type: Number},
     *  quality: {type: Number},
     *  on_time: {type: Number},
     *  service: {type: Number},
     *  score: {type: Number}
     * }
     */
    rating: {type: Object},
    /**
     * {
     *  src: {type: String},
     *  title: {type: String}
     *  description: {type: String}
     * }
     */
    photos: {type: Array},
    /**
     * {
     *  time: {type: Number},
     *  place: {type: String},
     *  address: {type: String}
     * }
     */
    plan: {type: Array},
    price_per_ticket: {type: Number, required: true},
    tickets: {type: Array},
    total_tickets: {type: Number, required: true},
    tickets_booked: {type: Number, default: 0},
    driver: {type: String}, // name of driver
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date_created: {type: Number},
    date_updated:{ type: Number}
})

module.exports = busSchema;