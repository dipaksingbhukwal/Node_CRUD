// app.js
const express = require("express");
const bodyParser = require("body-parser");

// Import routes
const product = require("./routes/product.route");

// Initialize app
const app = express();

// Setup database connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb://localuser:abcd1234@ds121248.mlab.com:21248/csuf-productstutorial";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use routes
app.use("/products", product);

let port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
