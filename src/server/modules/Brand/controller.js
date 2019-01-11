const RootController = require('../Root/controller');
const Brand = require('./model');
const middleware = require('./middleware');

class BrandController extends RootController {
    constructor() {
        super();
        this.router.get('/api/brand/generator', this.generatorBrand.bind(this));
        this.router.get('/api/brand/find/:params', middleware.validateFindBrand, this.handleFindBrand.bind(this));
        this.router.get('/api/brand/find-by-routes/:params', this.handleFindBrandByRoutes.bind(this));
        // this.router.get('/api/brand/find-details/:id', this.handleFindBrand.bind(this));
        this.router.post('/api/brand/add', middleware.validateAddBrand, this.handleAddBrand.bind(this));
        // this.router.get('/api/brand/update', this.handleUpdateBrand.bind(this));
        // this.router.get('/api/brand/remove', this.handleRemoveBrand.bind(this));
        return this.router;
    }

    async handleFindBrandByRoutes(req, res, next) {

    }

    async generatorBrand(req, res, next) {
        const brands = [
            {
                _id: Brand.generatorObjectId(),
                routes: [
                    {
                        "from": {
                            "name": "Bà Rịa - Vũng Tàu",
                            "slug": "ba-ria-vung-tau",
                            "type": "tinh",
                            "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                            "code": "77"
                        },
                        "to": {
                            "name": "Hồ Chí Minh",
                            "slug": "ho-chi-minh",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hồ Chí Minh",
                            "code": "79"
                        },
                    }
                    ,
                    {
                        "from": {
                            "name": "Đà Nẵng",
                            "slug": "da-nang",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Đà Nẵng",
                            "code": "48"
                        },
                        "to": {
                            "name": "Hà Nội",
                            "slug": "ha-noi",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hà Nội",
                            "code": "01"
                        },
                    }
                ],
                code: "TT",
                name: "Toàn Thắng"
            },
            {
                _id: Brand.generatorObjectId(),
                routes: [
                    {
                        "from": {
                            "name": "Bà Rịa - Vũng Tàu",
                            "slug": "ba-ria-vung-tau",
                            "type": "tinh",
                            "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                            "code": "77"
                        },
                        "to": {
                            "name": "Hồ Chí Minh",
                            "slug": "ho-chi-minh",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hồ Chí Minh",
                            "code": "79"
                        },
                    }
                    ,
                    {
                        "from": {
                            "name": "Đà Nẵng",
                            "slug": "da-nang",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Đà Nẵng",
                            "code": "48"
                        },
                        "to": {
                            "name": "Hà Nội",
                            "slug": "ha-noi",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hà Nội",
                            "code": "01"
                        },
                    }
                ],
                code: "HM",
                name: "Hoa Mai"
            },
            {
                _id: Brand.generatorObjectId(),
                routes: [
                    {
                        "from": {
                            "name": "Bà Rịa - Vũng Tàu",
                            "slug": "ba-ria-vung-tau",
                            "type": "tinh",
                            "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                            "code": "77"
                        },
                        "to": {
                            "name": "Hồ Chí Minh",
                            "slug": "ho-chi-minh",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hồ Chí Minh",
                            "code": "79"
                        },
                    }
                    ,
                    {
                        "from": {
                            "name": "Đà Nẵng",
                            "slug": "da-nang",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Đà Nẵng",
                            "code": "48"
                        },
                        "to": {
                            "name": "Hà Nội",
                            "slug": "ha-noi",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hà Nội",
                            "code": "01"
                        },
                    }
                ],
                code: "TP",
                name: "Thiên Phú"
            },
            {
                _id: Brand.generatorObjectId(),
                routes: [
                    {
                        "from": {
                            "name": "Bà Rịa - Vũng Tàu",
                            "slug": "ba-ria-vung-tau",
                            "type": "tinh",
                            "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                            "code": "77"
                        },
                        "to": {
                            "name": "Hồ Chí Minh",
                            "slug": "ho-chi-minh",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hồ Chí Minh",
                            "code": "79"
                        },
                    }
                    ,
                    {
                        "from": {
                            "name": "Đà Nẵng",
                            "slug": "da-nang",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Đà Nẵng",
                            "code": "48"
                        },
                        "to": {
                            "name": "Hà Nội",
                            "slug": "ha-noi",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hà Nội",
                            "code": "01"
                        },
                    }
                ],
                code: "BL",
                name: "Bốn Luyện"
            },
            {
                _id: Brand.generatorObjectId(),
                routes: [
                    {
                        "from": {
                            "name": "Bà Rịa - Vũng Tàu",
                            "slug": "ba-ria-vung-tau",
                            "type": "tinh",
                            "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                            "code": "77"
                        },
                        "to": {
                            "name": "Hồ Chí Minh",
                            "slug": "ho-chi-minh",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hồ Chí Minh",
                            "code": "79"
                        },
                    }
                    ,
                    {
                        "from": {
                            "name": "Đà Nẵng",
                            "slug": "da-nang",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Đà Nẵng",
                            "code": "48"
                        },
                        "to": {
                            "name": "Hà Nội",
                            "slug": "ha-noi",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hà Nội",
                            "code": "01"
                        },
                    }
                ],
                code: "MN",
                name: "Minh Nhật"
            },
            {
                _id: Brand.generatorObjectId(),
                routes: [
                    {
                        "from": {
                            "name": "Bà Rịa - Vũng Tàu",
                            "slug": "ba-ria-vung-tau",
                            "type": "tinh",
                            "name_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
                            "code": "77"
                        },
                        "to": {
                            "name": "Hồ Chí Minh",
                            "slug": "ho-chi-minh",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hồ Chí Minh",
                            "code": "79"
                        },
                    }
                    ,
                    {
                        "from": {
                            "name": "Đà Nẵng",
                            "slug": "da-nang",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Đà Nẵng",
                            "code": "48"
                        },
                        "to": {
                            "name": "Hà Nội",
                            "slug": "ha-noi",
                            "type": "thanh-pho",
                            "name_with_type": "Thành phố Hà Nội",
                            "code": "01"
                        },
                    }
                ],
                code: "TH",
                name: "Tuấn Hoàng"
            },
        ]
        brands.forEach(brand => {
            Brand.save(brand);
        });
        return res.status(200).json({

        })
    }

    async handleFindBrand(req, res, next) {

        const { conditions, projection, options } = req.body.query;

        let docs = {
            brands: await Brand.find(conditions, projection, options),
            prices: [
                {
                    type: "increase",
                    describe: "Tăng dần"
                },
                {
                    type: "decrease",
                    describe: "Giảm dần"
                }
            ],
            types: [
                {
                    type: "normal",
                    describe: "Xe thường"
                },
                {
                    type: "vip",
                    describe: "Xe vip"
                },
                {
                    type: "travel",
                    describe: "Xe du lịch"
                }
            ]
        }
        if (docs) {
            return res.status(200).json({
                payload: docs,
                msg: 'Get list Brand success',
                isError: false
            })
        }
        else {
            return res.status(404).json({
                payload: null,
                msg: 'Get list Brand fail',
                isError: true
            })
        }
    }

    async handleAddBrand(req, res, next) {
        const data = {
            _id: Brand.generatorObjectId(),
            ...req.body
        };
        console.log('data', data)
        return res.status(200).json({
            payload: await Brand.save(data),
            isError: false,
            msg: "Add new brand success!"
        })
    }


    static getBrandController() {
        return new BrandController();
    }
}


module.exports = BrandController.getBrandController();