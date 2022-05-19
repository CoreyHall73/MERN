const ProductController = require("../controllers/product.controller")


module.exports = app => {
    //Test
    app.get("/api/products/test", ProductController.test);
    //Create
    app.post("/api/products/new", ProductController.create);
    //Read all
    app.get("/api/products", ProductController.get);
    //Read one
    app.get("/api/products/:product_id", ProductController.oneProduct);
    //Update one
    app.put('/api/products/:product_id', ProductController.updateProduct);
    //Delete
    app.delete('/api/products/:product_id', ProductController.deleteProduct);
}