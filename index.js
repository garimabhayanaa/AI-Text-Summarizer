const express = require('express');
const app = express();
const port = 3000;
const runInference = require('./inference.js'); // or './inference.js'

app.use(express.json());
app.use(express.static('public'));

app.post('/inference', async (req, res) => {
  const { text, task, tone } = req.body;

  if (!text || !task || !tone) {
    return res.status(400).send("Missing 'text', 'task', or 'tone'");
  }

  try {
    const output = await runInference(text, task, tone);
    res.send(output);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});