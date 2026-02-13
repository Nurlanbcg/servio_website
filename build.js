const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

// Remove existing build directory if it exists
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true });
}

// Create build directory
fs.mkdirSync(buildDir, { recursive: true });

// Copy static files to build directory
const filesToCopy = ['index.html', 'style.css', 'script.js', 'server.js', 'package.json', 'Procfile'];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(buildDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

// Copy public directory if it exists
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const buildPublicDir = path.join(buildDir, 'public');
  fs.mkdirSync(buildPublicDir, { recursive: true });
  fs.readdirSync(publicDir).forEach(file => {
    fs.copyFileSync(path.join(publicDir, file), path.join(buildPublicDir, file));
  });
}

console.log('Build directory created successfully!');
