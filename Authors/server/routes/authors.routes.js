const AuthorCon = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api", AuthorCon.helloworld);
    app.get("/api/authors", AuthorCon.findall);
    app.post("/api/authors/new", AuthorCon.makeproduct);
    app.get("/api/authors/:id", AuthorCon.getOne);
    app.put("/api/authors/:id", AuthorCon.updateProduct);
    app.delete("/api/authors/:id", AuthorCon.deleteProduct);
}