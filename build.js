const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'grid.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'grid.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'grid.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'grid.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'grid.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/grid.css     ${unminified.length} bytes`);
console.log(`  dist/grid.min.css ${minified.length} bytes`);
