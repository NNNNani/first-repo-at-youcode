const fs = require('fs');
const path = require('path');

const fichier = path.join(__dirname, 'data.json');

const apprenants = JSON.parse(
  fs.readFileSync(fichier, 'utf8')
);

module.exports = { apprenants };
