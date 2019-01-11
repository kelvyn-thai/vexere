const express = require('express');
const router = express.Router();
const wrapAA = require('../Share/library/wrapAA');

class RootRouter  {
    constructor() {
        this.router =  wrapAA(router);
    }
}

module.exports = RootRouter;