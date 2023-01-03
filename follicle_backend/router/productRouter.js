const client = require("../server");
const router = require("express").Router();

router.route("/").get((req, res) => {
  const Products = client.db("Products");
  let collections = db.getCollectionNames();
  let all = [];
  for (let i = 0; i < collections.length; i++) {
    const curCollection = { [collections[i]]: [] };
    db.getCollection(collections[i])
      .find()
      .forEach(curCollection[collections[i]].push(printjson));
    all.push(curCollection);
  }
  if (all) {
    return res.json({ success: true, content: all });
  } else {
    return res.json({ success: false, content: "Empty Collection!" });
  }
});

router.route("/addProducts").post((req, res) => {
  console.log(client);
  const Products = client.db("Products");
  const Collection = Products.collection(req.body.Category);
  const doc = req.body;
  delete doc.Category;
  const result = Collection.insertOne(doc);
  result
    .then((resp) => {
      console.log(`Document inserted with _id: ${resp.insertedId}`);
      return res.json({ message: "success", id: `${result.insertedId}` });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ message: "False", content: "DataBase Error" });
    });
});

module.exports = router;
