const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { text } = req.body; // Make sure 'text' is passed from the frontend

  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/text/entity_sentiment',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYzFjNWNjYTAtMzFiZi00YjNhLWE5NGQtNjcxYTI1NzEyYzk3IiwidHlwZSI6ImFwaV90b2tlbiJ9.utEhImw2CeLGZSx1nEzqLibD-6fd09sGHn7e7YXrjAY',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      providers: "amazon", // Note: providers as a single string
      text: text,
      language: "en",
      fallback_providers: ""
    })
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error('Backend Error:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
      details: error.response ? error.response.data : null,
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
