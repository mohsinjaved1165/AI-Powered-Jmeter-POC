const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

// Helper function to generate random posts
function generateRandomPosts(count = 2) {
  const posts = [];
  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * 1000) + 1; // random id between 1-1000
    const title = `Post Title ${Math.floor(Math.random() * 1000) + 1}`;
    posts.push({ id, title });
  }
  return posts;
}

// Helper function to generate random users
function generateRandomUsers(count = 2) {
  const users = [];
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const name = names[Math.floor(Math.random() * names.length)];
    users.push({ id, name });
  }
  return users;
}

// Dynamic posts endpoint
app.get("/posts", (req, res) => {
  const posts = generateRandomPosts(2); // generate 2 random posts
  res.json(posts);
});

// Dynamic users endpoint
app.get("/users", (req, res) => {
  const users = generateRandomUsers(2); // generate 2 random users
  res.json(users);
});

// Unstable endpoint with random failures
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
