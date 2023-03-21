const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

var corsOptions = {
  origin: "http://127.0.0.1:3000/",
  optionsSuccessStatus: 200,
};

const app = express();

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, { useUnifiedTopology: true });
module.exports = client;
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");

app.use(express.json());
app.use("/products", cors(), productRouter);
app.use("/users", userRouter);
app.use(cors(corsOptions));

app.listen(5000, () => {
  console.log("Running on Port 5000!");
  const initDB = async () => {
    try {
      await client.connect();
      console.log("Successful Connection!");
    } catch (err) {
      console.log(err);
    }
  };
  initDB();
});
