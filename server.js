// Load environment variables if present
require('dotenv').config();

const express = require('express');
const app = express();

// Define the port; use environment variable PORT if available
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// (Optional) A fallback route if needed
app.get('/api', (req, res) => {
  res.json({ message: "Welcome to the Shopping App API!" });
});

// Listen on all network interfaces so the port is open externally
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
