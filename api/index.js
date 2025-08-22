const express = require('express');
const app = express();
const PORT = 3000;
const pool = require("./db");
// Middleware pour JSON
app.use(express.json());

let tasks = [
  { id: 1, title: 'Faire les courses' },
  { id: 2, title: 'Lire un livre' }
];


// GET /tasks
app.get("/tasks", async (req, res) => {
   res.json(tasks || []); // retourne un tableau même si vide
});


module.exports = app;