const express = require('express');

const app = express();

app.get("/", (req,res) => {
  res.send("ola")
});

app.listen(3000, () => {
  console.log("server is running...")
});

/*
Para rodar o servidor execute o comando no terminal:
nodemon index.js
*/

