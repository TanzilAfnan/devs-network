const express = require("express");
const mongoose = require("mongoose");

// Importing the Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Importing Other files
const keys = require("./config/keys");
const dbConnect = require("./helpers/dbConnect");

const app = express();

// Connecting to database
dbConnect(keys.mongodb.dbURL);

// Using routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.get("/", (req, res) => res.send("Hello World"));

module.exports = app;
