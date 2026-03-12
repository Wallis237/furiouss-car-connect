const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all requests by sending the index.html from the dist directory
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});