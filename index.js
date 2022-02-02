const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = process.env.port || 8020;
//import routes
const users = require("./src/routes/users.routes");
//import middlewares
const logger = require("./src/middlewares/logger.middleware");

//middlewares
app.use(logger);
app.use("/users", users);

app.listen(PORT, function () {
    console.log(`Serving on http://localhost:${PORT}`);
});