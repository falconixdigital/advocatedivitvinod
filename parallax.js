const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<svg class="absolute top-0 right-0/g, '<svg class="parallax-blob absolute top-0 right-0');
html = html.replace(/<svg class="absolute bottom-0 left-0/g, '<svg class="parallax-blob absolute bottom-0 left-0');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Added parallax-blob classes');