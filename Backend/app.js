const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
// const indexRoutes = require("./src/routes/index.routes");
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/user.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");


connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/uploads",express.static("uploads"));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "https://portfolio1128sanjay.netlify.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}))


app.use("/users",userRoutes)
app.get("/",(req,res) => {
  res.send("Hello World");
});



module.exports = app;