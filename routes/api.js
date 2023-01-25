const express = require("express");

const app = express.Router();

app.get("/", (_req, res) => {
    res.send("Hello, World!");
});

module.exports = app;