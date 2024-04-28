import express from 'express';
import fs from 'node:fs/promises';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/meals', async (req, res) => {
  const meals = await fs.readFile('./data/meals.json', 'utf-8');
  res.status(200).json(JSON.parse(meals));
});

app.use((req, res) => res.status(404).send('<h3>Page not found.</h3>'));
app.use((error, req, res) => res.status(500).send('<h3>Internal Server Error</h3>'));

app.listen(3000, () => console.log('API service on PORT:', 3000));
