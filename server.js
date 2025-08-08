// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "sk-key_16636d19c2dc034ab42d190655d4";    // Your Retell API Key
const AGENT_ID = "agent_8e3ee5fa5f3ee9e20ea6cbcccf";    // Your Agent ID

app.post("/create-web-call", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.retellai.com/v2/call/create-web-call",
      { agent_id: AGENT_ID },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to create web call" });
  }
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
