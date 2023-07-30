const express = require('express');

const router = express.Router();

const {
    getData,
    postData,
    deleteData,
    putData,
} = require('../controllers/main');

const products = require('../products');

router.route('/').get(getData).post(postData).delete(deleteData).put(putData);

router.get('/:id', (req, res) => {
    res.json(products.products[req.params.id]);
})

module.exports = router;