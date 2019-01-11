const { isEmpty } = require('lodash');
const { validateFieldsRequired } = require('../Share/helper');

module.exports = {
    validateFindBus: function (req, res, next) {

        let { conditions, projection, options } = JSON.parse(req.params['params']);

        const fieldsRequired = ['from', 'to', 'time_start'];

        const result = validateFieldsRequired(conditions, fieldsRequired);

        if (isEmpty(result)) {
            
            let queryConditions = {
                'from.code': conditions['from'].code,
                'to.code': conditions['to'].code,
                time_start: { $gte: conditions['time_start']},
            }
            let queryOptions = options ? {...options} : {};
            let queryProjection = projection ? projection : '_id from to time_start time_end depature arrival brand bus_type seat_type services rating total_tickets tickets_booked price_per_ticket';

            conditions.brands.length > 0 ? queryConditions.brand = {$in: conditions.brands} : false;
            conditions.types.length > 0 ? queryConditions.bus_type = {$in: conditions.types} : false;

            delete queryOptions.sort;
            options.sort.prices.length > 0 ? queryOptions.sort = {price_per_ticket: options.sort.prices[0].type === "increase" ? 1 : -1} : false;

            req.body.query = {
                conditions: queryConditions,
                projection: queryProjection,
                options: queryOptions
            }
            req.body.from = conditions.from;
            req.body.to = conditions.to;
            next();
        }
        else {
            return res.json({
                payload: result,
                isError: true,
                msg: 'Invalid input from user'
            })
        }
    },
    validateAddBus: function (req, res, next) {

        const fieldsRequired = [
            'from',
            'to',
            'time_start',
            'time_end',
            'depature',
            'arrival',
            'brand',
            'bus_type',
            'seat_type',            
            'cancellation_policy',
            'price_per_ticket'
        ];

        const result = validateFieldsRequired(req.body, fieldsRequired);

        if (isEmpty(result)) {
            next();
        }
        else {
            return res.json({
                payload: result,
                isError: true,
                msg: 'Invalid input from user'
            })
        }

    }
}