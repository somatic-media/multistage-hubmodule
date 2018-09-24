"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HAPIKEY: '"105fc572-8ff1-4d9e-bb4a-4dc8c2cbebcf"'
});
