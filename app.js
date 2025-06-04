const express = require("express");
const _ = require("lodash");
const app = express();

app.use(express.json());

app.post("/merge", (req, res) => {
  const safe = {};
  // Lodash merge (unsafe in this version)
  _.merge(safe, req.body);
  res.send(safe);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
