const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());


app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("served @ http://localhost:5000");
});