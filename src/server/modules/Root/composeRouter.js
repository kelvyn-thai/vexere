const router = require('express').Router();
const shareRouter = require('../Share/controller');
const ticketRouter = require('../Ticket/controller');
const busRouter = require('../Bus/controller');
const userRouter = require('../Users/controller');
const brandRouter = require('../Brand/controller');

router.use(shareRouter);
router.use(ticketRouter);
router.use(busRouter);
router.use(userRouter);
router.use(brandRouter);

module.exports = router;
