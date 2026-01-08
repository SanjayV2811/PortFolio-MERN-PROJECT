const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
// const indexRoutes = require("./src/routes/index.routes");
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/user.routes");
const cookieParser = require("cookie-parser");


connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/uploads",express.static("uploads"));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());

app.use("/users",userRoutes)



module.exports = app;