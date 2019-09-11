const express = require("express"); //zahtevam instaliran
const mongoose = require("mongoose");

const app = express();  // metodu expres stavljam u neki const

// db config
const db = require("./config/keys").mongoURI;

//connect ka bazi iz mongoose
mongoose.connect(db)
.then(()=> console.log("Mongodb je konektovan"))
.catch(err => console.log("Greska"));

app.get("/", (req, res) => res.send("Radi backend. Radi node js. DFFFFFFFFFFFFFFFFFFFFFF"));  // neki const dobija get - odgovor u port

const port = process.env.PORT || 5000;  //trazi port ili stavi na 5000

app.listen(port, () => console.log());  //slusaj sa listen port da li ima greske u konzolu belezi

////

