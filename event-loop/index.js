const fs = require('fs');
console.log('Start');

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('File read:', data);
});

console.log('End');
