const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set proper mime types for static files
app.use((req, res, next) => {
  if (req.url.endsWith('.css')) {
    res.type('text/css');
  } else if (req.url.endsWith('.js')) {
    res.type('application/javascript');
  } else if (req.url.endsWith('.png')) {
    res.type('image/png');
  } else if (req.url.endsWith('.jpg') || req.url.endsWith('.jpeg')) {
    res.type('image/jpeg');
  }
  next();
});

// Serve static files from the project root
app.use(express.static(path.join(__dirname), { 
  maxAge: '1h',
  etag: false 
}));

// Explicitly serve public directory
app.use('/public', express.static(path.join(__dirname, 'public'), { 
  maxAge: '1h',
  etag: false 
}));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback to index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
