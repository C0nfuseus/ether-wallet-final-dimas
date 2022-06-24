const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/about", (req,res) => {
    res.sendFile(path.join(__dirname + "/about.html"));
})

app.listen(process.env.)

app.listen(process.env.PORT || 3000, function(){
    console.log('express server listening on port %d in %s mode', this.address().port, app.settings.env);
  });
