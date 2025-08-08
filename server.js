const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Use Railway's environment variables for security (set these in Railway "Variables" tab)
const API_KEY = process.env.API_KEY || "sk-key_16636d19c2dc034ab42d190655d4";
const AGENT_ID = process.env.AGENT_ID || "agent_8e3ee5fa5f3ee9e20ea6cbcccf";

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

// Use process.env.PORT and listen on all interfaces (0.0.0.0)
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
