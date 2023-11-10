const router = require('express').Router();

//import all api route files
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// add api routes to the router
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
