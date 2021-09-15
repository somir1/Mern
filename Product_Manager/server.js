const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//import config
require("./server/config/products.config");

//import routes
require("./server/routes/products.routes")(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );