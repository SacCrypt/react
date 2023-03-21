const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.route("/").post(async (req, res) => {
  const client = require("../server");
  const users = client.db("Users");
  const collection = users.collection("dev");
  const number = await collection.countDocuments({ email: req.body.email });
  if (number > 0) {
    return res.json({ status: "Failure", message: "Duplicate email" });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.pass, salt);
    req.body.pass = hash;
    const inserting = {
      name: req.body.name,
      pass: req.body.pass,
      email: req.body.email,
    };

    collection
      .insertOne(inserting)
      .then((data) => {
        console.log(data);
        return res.json({ status: "Success" });
      })
      .catch((err) => {
        console.log(err);
        return res.json({ status: "Failure" });
      });
  }
});

module.exports = router;
