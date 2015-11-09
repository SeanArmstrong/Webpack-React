// only needed for accurate coverage reporting
// Regex - Match all .js files except __spec__.js app.js and test.js
var testsContext = require.context(".", true, /^((?!(__spec__|test|app)).)*\.js/);
testsContext.keys().forEach(testsContext);
