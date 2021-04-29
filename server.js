const express = require("express");
const app = express();
const port = 5000;
//mongodb
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;
//Database connection to atlas using mongoose...
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); //enable ejs

app.get("/",(req,res)=>{
    res.render("page1");
})
const species = require("./routes/species");
app.use("/species", species);

const sight = require("./routes/sight");
app.use("/sight", sight);

app.listen(port, () => {
  console.log(`Example node app listening at http://localhost:${port}`);
});
