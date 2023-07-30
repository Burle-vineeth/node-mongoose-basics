
const products = require('../products');

const getData = (req, res) => {
    let obj = products.products;
    if (req.query) {
        for (let x in req.query) {
            vla = x;
            obj = obj.filter((data) => {
                return data[x].includes(req.query[x]);
            })
        }
        return res.json(obj);
    }
    res.json(products);
}

const postData = (req,res) => {
    products.products.push(req.body);
    res.json('hai');
}

const deleteData = (req,res) => {
    products.products.pop();
    res.json('hai');
}

const putData = (req,res) => {
    products.products.pop();
    products.products.push(req.body);
    res.json('hai');
}

module.exports = {
    getData,
    postData,
    deleteData,
    putData,
};