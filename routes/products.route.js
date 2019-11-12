const { getALLProducts, getSingelProduct } = require("../controllers/products.controller")



module.exports = function(router) {
    router.options("/products", function(req, res){
        res.header("Allow", "OPTIONS, GET, POST");
        res.status(204);
        res.end();
    });

    router.get("/products", getALLProducts);

    router.get("/products/:sku", getSingelProduct);
    
   // router.delete("/products/:sku", deleteProduct);

   // router.patch("/products/:sku", patchProduct);

   // router.post("/products", postProduct);
};