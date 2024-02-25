const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/*", (req, res) => {
  res.status(200);
  res.json({ code: 200, msg: "Code is online" });
  res.end();
});

app.listen(PORT, (e) => {
  if (e) {
    console.error(e);
    return;
  }
  console.log(`Server Up at port ${PORT}`);
});

module.exports = app;
