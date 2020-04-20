if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/library.min.js');
} else {
  module.exports = require('./dist/library.js');
}
