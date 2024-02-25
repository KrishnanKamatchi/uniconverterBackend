const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const PORT = 3000;

app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.write("OOPS This is a service API unit, Please Contact Admin");
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
