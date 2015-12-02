var yaml = require('js-yaml'),
    fs = require('fs'),
    path = require('path');

module.exports = yaml.load(fs.readFileSync(path.join(__dirname, 'lib/default.yaml'), 'utf8'));
