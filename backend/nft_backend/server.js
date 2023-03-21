const express = require("express");
const cors = require("cors");

const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/nft";
const client = new MongoClient(uri, { useUnifiedTopology: true });

var corsOptions = {
  origin: "http://127.0.0.1:3000",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const registerRouter = require("./router/register");
const loginRouter = require("./router/login");
app.use("/register", cors(), registerRouter);
app.use("/login", cors(), loginRouter);
module.exports = client;
app.listen(5000, () => {
  console.log("Running on Port 5000!");
  const initDB = async () => {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log(err);
    }
  };
  initDB();
});
