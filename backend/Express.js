// server.js
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
app.use(cors()); // Allows CORS for cross-origin requests
app.use(express.json()); // Allows JSON body parsing

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use environment variables for sensitive info
});

app.post('/get-response', async (req, res) => {
  try {
    const { prompt } = req.body; // Get the prompt from the client
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    res.json(completion.choices[0].message.content); // Send the response back to the client
  } catch (error) {
    res.status(500).json({ error: 'Error with OpenAI: ' + error.message });
  }
});

const PORT = process.env.PORT || 3001; // Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
