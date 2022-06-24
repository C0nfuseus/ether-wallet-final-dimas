const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/about", (req,res) => {
    res.sendFile(path.join(__dirname + "/about.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`RUnning on port: ${portNumber}`);