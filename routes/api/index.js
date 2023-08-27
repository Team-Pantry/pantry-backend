const router = require('express').Router();
const foodRoutes = require('./food-routes');
const tradeRequestRoutes = require('./trade-request-routes');
const userRoutes = require('./user-routes');

router.use('/food', foodRoutes);
router.use('/trade-request', tradeRequestRoutes);
router.use('/user', userRoutes);


module.exports = router;