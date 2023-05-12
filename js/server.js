// import  library
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// set area
app.set("view engine", "ejs");

// user area
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/public", express.static("public"));

// http process
app.get("/", (req, res)=>{
    console.log("[+]---> Server is activated\n[+]---> PORT: 3000");
    res.render("index");
})

// port
app.listen(3000);