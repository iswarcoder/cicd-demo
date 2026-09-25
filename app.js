const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Serve HTML, CSS and JavaScript
app.use(express.static(path.join(__dirname, "public")));

// Health check
app.get("/health", (req, res) => {
    res.status(200).send("Server is healthy! CI/CD is working.");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});