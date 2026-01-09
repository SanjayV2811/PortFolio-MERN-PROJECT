const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
// const indexRoutes = require("./src/routes/index.routes");
const connectDB = require("./src/config/db");

const cookieParser = require("cookie-parser");
const cors = require("cors");



connectDB();

app.use(cors({
  origin: ["http://localhost:5173","https://mern-project-1128.netlify.app"],
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true

}));

console.log(process.env.MONGO_URI);

// IMPORTANT: handle preflight
app.options(/.*/, cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/uploads",express.static("uploads"));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());


const userRoutes = require("./src/routes/user.routes");

app.use("/users",userRoutes)
app.get("/",(req,res) => {
  res.send("Hello World");
});



module.exports = app;


// const express = require("express");
// const app = express();
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();

// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET","POST","PUT","DELETE","OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // IMPORTANT: handle preflight
// app.options("*", cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const userRoutes = require("./src/routes/user.routes");
// app.use("/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Backend running");
// });

// module.exports = app;
