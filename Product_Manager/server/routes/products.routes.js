const ProductCon = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api", ProductCon.helloworld);
    app.get("/api/products", ProductCon.findall);
    app.post("/api/products/new", ProductCon.makeproduct);
    app.get("/api/products/:id", ProductCon.getOne);
    app.put("/api/products/:id", ProductCon.updateProduct);
    app.delete("/api/products/:id", ProductCon.deleteProduct);
}