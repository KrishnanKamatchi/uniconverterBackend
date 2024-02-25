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

app.post("/currencyConverter", async (req, res) => {
  let { baseCountry, targetCountry, amount } = req.body;
  let apiToken = "17d03cecd71bc2d2a8a14434";

  let url = `https://v6.exchangerate-api.com/v6/${apiToken}/pair/${baseCountry}/${targetCountry}/${amount}`;

  let options = {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      res.status(200);
      res.json(json);
      res.end();
    })
    .catch((err) => {
      if (err) {
        res.status(400);
        res.end();
      }
    });
});

app.listen(PORT, (e) => {
  if (e) {
    console.error(e);
    return;
  }
  console.log(`Server Up at port ${PORT}`);
});

// Export the Express API
module.exports = app;
