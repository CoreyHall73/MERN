const BeltController = require("../controllers/belt.controller")


module.exports = app => {
    app.get("/api/belts/test", BeltController.test)
    // app.post("/api/products/new", ProductController.create)
    // app.get("/api/products", ProductController.get)
    // app.get("/api/products/:product_id", ProductController.oneProduct)
    // app.put('/api/products/:product_id', ProductController.updateProduct);
    // app.delete('/api/products/:product_id', ProductController.deleteProduct);
}