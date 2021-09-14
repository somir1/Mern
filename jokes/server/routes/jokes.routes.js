const JokeCon = require("../controllers/jokes.controller");

module.exports = app => {
    // making our routes
    app.get("/api", JokeCon.helloworld);
    app.get("/api/jokes",JokeCon.findalljokes);
    app.post("/api/jokes/new",JokeCon.makejokes);
    app.get("/api/jokes/random",JokeCon.randomjoke);
    app.put("/api/jokes/:id",JokeCon.updatejoke);
    app.delete("/api/jokes/:id", JokeCon.deleteJoke);
}