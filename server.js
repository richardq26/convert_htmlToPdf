const express = require("express");
const app = express();
const morgan = require("morgan");
const path= require("path")

app.set("port", process.env.PORT || 3500);
app.use(express.urlencoded({ extended: false }));
var htmlRoutes = require("./routes/htmldoc.routes");

app.use(express.json());

//Middlewares
app.use(morgan("dev"));
app.use("/doc", htmlRoutes);
module.exports = app;
