import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

// /echo route
app.get("/echo", (req, res) => {
  const { name, age } = req.query;
  if (!name || !age) {
    return res.status(400).json({ ok: false, error: "name & age required" });
  }
  res.json({ ok: true, name, age, msg: `Hello ${name}, you are ${age}` });
});

// /profile/:first/:last route
app.get("/profile/:first/:last", (req, res) => {
  const { first, last } = req.params;
  res.json({ ok: true, fullName: `${first} ${last}` });
});

// TODO: Add param middleware and /users/:userId route here

app.listen(3000, () => console.log("API running at http://localhost:3000"));


