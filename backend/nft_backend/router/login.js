const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.route("/").post(async (req, res) => {
  console.log("hitting");
  const client = require("../server");
  const credentials = req.body;
  const users = client.db("Users");
  const collections = users.collection("dev");
  const values = await collections.findOne({ email: credentials.email });
  bcrypt.compare(credentials.pass, values.pass, async (err, isMatch) => {
    if (isMatch) {
      return res.json({
        status: true,
      });
    } else {
      return res.json({
        status: false,
      });
    }
  });
});

module.exports = router;
