var binary = require("@mapbox/node-pre-gyp");
var path = require("path");
var binding_path = binary.find(path.resolve(path.join(__dirname, "./package.json")));
console.log("binding_path", binding_path);
var binding = require(binding_path);

module.exports = binding;
