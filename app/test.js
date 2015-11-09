// only needed for accurate coverage reporting
// TODO: Better Regex
var testsContext = require.context("./components", true, /^((?!__spec__).)*$/);
testsContext.keys().forEach(testsContext);
