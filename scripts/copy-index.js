// scripts/copy-index.js
// Copies dist/index.html to both the root and src folders

const fs = require('fs');
const path = require('path');

const distIndex = path.join(__dirname, '../dist/index.html');
const rootIndex = path.join(__dirname, '../index.html');
const srcIndex = path.join(__dirname, '../src/index.html');

if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex);
  fs.copyFileSync(distIndex, srcIndex);
  console.log('index.html copied to root and src folders.');
} else {
  console.error('dist/index.html does not exist. Build the project first.');
  process.exit(1);
}
