// scripts/copy-dist-to-root.js
// Copies all contents of dist/ to the root directory (overwrites existing files)

const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

const distDir = path.join(__dirname, '../dist');
const rootDir = path.join(__dirname, '../');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Build the project first.');
  process.exit(1);
}

sh.cp('-R', path.join(distDir, '*'), rootDir);
console.log('All dist contents copied to root.');
