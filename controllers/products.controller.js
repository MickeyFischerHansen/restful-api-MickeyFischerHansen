const ProductRef = require("../models/product.model");

exports.getALLProducts = function(req, res){
    ProductRef.get().then(docs => {
        const results = [];
        docs.forEach(doc => results.push(doc.data()));
        res.json(results);
    });
};

exports.getSingelProduct = function(req, res){
    const result =  products.find(product => product.sku == req.params.sku);
    res.json(result);
 };

 exports.createProduct = function(req, res){
     req.fields.price = parseFloat(req.fields.price);
     req.fields.weight = parseFloat(req.fields.weight);
    ProductRef.add({...req.fields}) 
    
    .then(ref => {
        ref.get().then(doc => res.status(201).json(doc.data()))
    })
       .catch(error => res.json(error));
};

 
     exports.whatever = async function(req, res) {
    try {
        const docs = await ProductRef.where("sku", "==", req.params.sku).get();
        docs.forEach(doc => doc.ref.delete())
        res.status(204).end()
    } catch (errror) {
        res.status(500).end();
        log.error(error.stack);
    }
};

exports.patchProkduct = function(req, res){
    //opdater lortet
};

exports.postProduct = function(req, res){
    //opret lortet
};