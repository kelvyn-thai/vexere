const { isEmpty } = require('lodash');
const { validateFieldsRequired } = require('../Share/helper');

module.exports = {
    validateAddBrand: function (req, res, next) {

        const fieldsRequired = [
            'code',
            'name'
        ];
        const result = validateFieldsRequired(req.body, fieldsRequired);

        if (isEmpty(result)) {
            next();
        }
        else {
            return res.status(400).json({
                payload: result,
                isError: true,
                msg: 'Invalid input'
            })
        }
    },
    validateFindBrand: function (req, res, next) {

        const { conditions, projection, options } = JSON.parse(req.params['params']);

        let queryCondtions = { ...conditions };
        let queryProjection = projection;
        let queryOptions = { ...options };

        if (conditions.route) {
            queryCondtions = {
                ...queryCondtions,
                'routes': {
                    $elemMatch: {
                        $or: conditions.route
                    }
                }
            }
            delete queryCondtions.route;
        }


        req.body.query = {
            conditions: queryCondtions,
            projection: queryProjection,
            options: queryOptions
        }
        next();
    }
}