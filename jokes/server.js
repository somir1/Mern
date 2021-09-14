const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//import config
require("./server/config/jokes.config");

//import routes
require("./server/routes/jokes.routes")(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );