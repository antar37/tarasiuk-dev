const path = require('path');
const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');
process.argv.length = 1;
process.argv.push(nextPath, 'start');
process.env.NODE_ENV = 'production';
process.env.PORT = 8888
require(nextPath);