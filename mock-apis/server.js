const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json([{ id: 1, title: "Hello World" }, { id: 2, title: "Another Post" }]);
});

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

app.get("/unstable", (req, res) => {
  if (Math.random() > 0.5) {
    res.status(500).json({ error: "Random failure" });
  } else {
    res.json({ success: true });
  }
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
