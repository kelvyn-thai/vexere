const RootController = require('../Root/controller');
const Bus = require('./model');

const { validateFindBus, validateAddBus } = require('./middleware');

class BusController extends RootController {
    constructor() {
        super();
        this.router.get('/api/bus/find/:params', validateFindBus, this.handleFindBus.bind(this));
        this.router.get('/api/bus/find-details/:params', this.handleFindDetailsBus.bind(this));
        this.router.post('/api/bus/add-bus', validateAddBus, this.hanldeAddBus.bind(this));
        this.router.post('/api/bus/update-bus', this.handleUpdateBus.bind(this));
        this.router.post('/api/bus/remove-bus', this.handleRemoveBus.bind(this));
        this.router.get('/api/bus/generator', this.handleGeneratorBus.bind(this));        
        return this.router;
    }

    async handleGetBrands(req, res, next) {

    }

    async handleGeneratorBus(req, res, next) {

        for (let i = 0; i < 10; i++) {
            const object = // collection: buses
            {
                _id: Bus.generatorObjectId(),
                "time_start": 1547510400000,
                "time_end": 1547517600000,
                "depature": [
                    {
                        id: Bus.generatorObjectId(),
                        "place": "Nội thành TP Vũng Tàu",
                        "time": 1547506800000,
                        "type": "transship"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "place": "Nội thành TP Bà Rịa",
                        "time": 1547508600000,
                        "type": "transship"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "place": "Bến Xe Bà Rịa",
                        "time": 1547510400000,
                        "type": "address"
                    }
                ],
                "arrival": [
                    {
                        id: Bus.generatorObjectId(),
                        "place": "Bến Xe Miền Đông",
                        "time": 1547517600000,
                        "type": "address"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "place": "Bến Thành",
                        "time": 1547517600000,
                        "type": "address"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "place": "Nội thành TP HCM",
                        "time": 1547519400000,
                        "type": "transship"
                    },
                ],
                "plan": [
                    {
                        id: Bus.generatorObjectId(),
                        "time": 1547510400000,
                        "place": "Bến xe Bà Rịa",
                        "address": "QL51, Phước Hiệp, Tp.Bà Rịa, Bà Rịa - Vũng Tàu, Vietnam - Bà Rịa - Bà Rịa-Vũng Tàu"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "time": 1547512200000,
                        "place": "QL 51, Tân Thành",
                        "address": "QL 51, Tân Thành - Tân Thành - Bà Rịa-Vũng Tàu"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "time": 1547515800000,
                        "place": "QL 51, Long Phước, Long Thành",
                        "address": "QL 51, Long Phước, Long Thành - Long Thành - Đồng Nai"
                    },
                    {
                        id: Bus.generatorObjectId(),
                        "time": 1547517600000,
                        "place": "Bến Xe Miền Đông",
                        "address": "Quầy vé số 84- 85, BXMĐ 292 Đinh Bộ Lĩnh, phường 26 - Bình Thạnh - Hồ Chí Minh"
                    }
                ],
                "comments": [],
                "cancellation_policy": [
                    {
                        "time": "Trước giờ khởi hành",
                        "fee": "Không hoàn tiền nhưng khách hàng có thể đổi sang một vé khác cùng loại."
                    },
                    {
                        "time": "Sau giờ khởi hành",
                        "fee": "Không thể  hủy vé."
                    }
                ],
                "tickets": [
                    {
                        "seat_number": 1,
                        "price": 140000,
                        "status": "driver"
                    },
                    {
                        "seat_number": 2,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 3,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 4,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 5,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 6,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 7,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 8,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 9,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 10,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 11,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 12,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 13,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 14,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 15,
                        "price": 140000,
                        "status": "empty"
                    },
                    {
                        "seat_number": 16,
                        "price": 140000,
                        "status": "empty"
                    }
                ],
                "photos": [
                    {
                        "src": "/images/xe-huy-hoang-(vung-tau)-VeXeRe-KA3Dgn6-1000x600.jpg"
                    },
                    {
                        "src": "/images/xe-huy-hoang-(vung-tau)-VeXeRe-Mm65ea8-1000x600.jpg"
                    },
                    {
                        "src": "/images/xe-huy-hoang-(vung-tau)-VeXeRe-NwEgS9h-1000x600.jpg"
                    },
                    {
                        "src": "/images/xe-huy-hoang-(vung-tau)-VeXeRe-SQNJxNR-1000x600.jpg"
                    }
                ],
                "from": {
                    "name": "Bà Rịa - Vũng Tàu",
                    "slug": "ba-ria-vung-tau",
                    "type": "tinh",
                    "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                    "code": "77"
                },
                "to":  {
                    "name": "Hồ Chí Minh",
                    "slug": "ho-chi-minh",
                    "type": "thanh-pho",
                    "name_with_type": "Thành phố Hồ Chí Minh",
                    "code": "79"
                },
                "brand": {
                    "code": "TH",
                    "name": "Tuấn Hoàng"
                },
                "services": {
                    "has_wifi_free": true,
                    "has_water_free": true
                },
                "bus_type": {
                    "type": "normal",
                    "describe": "Xe 16 chỗ ngồi"
                },
                "seat_type": {
                    "type": "ac",
                    "describe": "Ghê ngồi"
                },
               
                "price_per_ticket": 130000,
                "rating": {
                    "total_rating": Math.floor(Math.random() * 100),
                    "score": Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100),
                    "quality": Math.floor(Math.random() * 6) ,
                    "on_time": Math.floor(Math.random() * 6), 
                    "service": Math.floor(Math.random() * 6) 
                },
                "total_tickets": 16,
                "tickets_empty": 16,
            }
            Bus.save(object);
        }
        return res.json();
    }

    async handleFindDetailsBus(req, res, next) {

        const { id, projection } = JSON.parse(req.params['params']);

        const result = await Bus.findById(id, projection);

        if (result) {
            return res.json({
                payload: result,
                msg: 'Get bus details success',
                isError: false
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Get bus details fail',
                isError: true
            })
        }
    }


    async handleUpdateBus(req, res, next) {

        const { _id } = req.body;
        const data = {
            ...req.body
        }
        const result = await Bus.findByIdAndUpdate(_id, data);

        if (result) {
            return res.status(200).json({
                payload: result,
                msg: 'Update Bus success',
                isError: false
            })
        }
        else {
            return res.status(404).json({
                payload: null,
                msg: 'Update Bus fail',
                isError: true
            })
        }
    }

    async handleRemoveBus(req, res, next) {

        const { _id } = req.body;

        const result = await Bus.findByIdAndDelete(_id);

        if (result) {
            return res.json({
                payload: result,
                msg: 'Remove Bus success',
                isError: false
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Remove Bus fail',
                isError: true
            })
        }
    }

    async hanldeAddBus(req, res, next) {

        const data = req.body;

        const result = await Bus.save(data);

        if (result) {
            return res.json({
                payload: result,
                msg: 'Add Bus success',
                isError: false
            })
        }
        else {
            return res.json({
                payload: null,
                msg: 'Add Bus fail',
                isError: true
            })
        }
    }

    async handleFindBus(req, res, next) {

        const { conditions, projection, options } = req.body.query;
        const { from, to} = req.body;

        const docs = { 
            ...await Bus.findAndCount(conditions, projection, options),
            route: {
                from,
                to
            }
        };

        if (docs) {
            return res.status(200).json({
                payload: docs,
                msg: 'Get list Bus success',
                isError: false
            })
        }
        else {
            return res.status(404).json({
                payload: null,
                msg: 'Get list Bus fail',
                isError: true
            })
        }
    }


    static getBusController() {
        return new BusController();
    }
}

module.exports = BusController.getBusController();