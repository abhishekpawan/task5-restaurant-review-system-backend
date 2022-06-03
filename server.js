const path = require("path")
const express = require("express");
const cors = require("cors")
const jsonServer = require("json-server");
const dotenv = require("dotenv").config();
const generatingDB = require("./restaurant-service-JsonServer");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();
const db = generatingDB();
const {protect} = require('./middleware/authMiddleware')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api",protect, jsonServer.defaults(), jsonServer.router(db));


app.listen(port, () => console.log(`Server started on port ${port}`));
