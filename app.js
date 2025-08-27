const express = require('express')
const app = express()
const path = require('path');

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "main", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "main", "about.html"));
});

app.get("/achivement", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "main", "achivement.html"));
});

app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "main", "project.html"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})