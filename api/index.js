const express = require('express');
const app = express();
const PORT = 3000;
const pool = require("./db");
// Middleware pour JSON
app.use(express.json());

// Endpoint test
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});


// GET /tasks
app.get("/tasks", async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  res.json(result.rows);
});

// POST /tasks
app.post("/tasks", async (req, res) => {
  const { text } = req.body;
  const result = await pool.query("INSERT INTO tasks (text) VALUES ($1) RETURNING *", [text]);
  res.status(201).json(result.rows[0]);
});


// Lancer serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});