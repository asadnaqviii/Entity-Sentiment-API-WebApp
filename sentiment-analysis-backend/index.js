// In sentiment-analysis-backend/index.js

const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const text = req.body.text;
  // TODO: Call an external sentiment analysis API
  // For example, using axios to send a request
  // const result = await axios.post('external-api-url', { text });
  // res.json({ sentiment: result.data.sentiment });

  res.json({ sentiment: 'Positive/Negative/Neutral' }); // Placeholder response
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
