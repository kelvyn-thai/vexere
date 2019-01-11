const RootController = require('../Root/controller');
const _helper =  require('./helper');
const fs = require('fs');
const path = require('path');
const Drive = require('../GoogleDriveAPIs');

class ShareController extends RootController {
    constructor(){
        super();
        this.router.get('/api/share/list-city', this.handleGetListCity.bind(this));
        return this.router;
    }

    handleGetListCity(req, res, next) {
        const pathString = __dirname + path.resolve('/constant/city_file.json');
        fs.readFile(pathString, 'utf-8', (err, data) => {
            if(err){
                return res.json({
                    payload: null,
                    msg: 'Get list city fail',
                    isError: true
                })
            }
            else {
                const payload = [..._helper.convertObjJsonToArray(JSON.parse(data))];
                return res.json({
                    payload: payload,
                    msg: 'Get list city success',
                    isError: false
                })
            }
        })
    }

    static getShareController(){
        return new ShareController();
    }
}

module.exports =  ShareController.getShareController();