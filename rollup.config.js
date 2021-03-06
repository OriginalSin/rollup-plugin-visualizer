const rollupCommonJs = require("rollup-plugin-commonjs");
const rollupNodeResolve = require("rollup-plugin-node-resolve");
//const rollupUglify = require("rollup-plugin-uglify");

module.exports = {
  input: "./src/plugin1.js",
  output: { format: "iife" },
  plugins: [
    rollupNodeResolve({
      jsnext: true,
      main: true,
      module: true
    }),
    rollupCommonJs({
      ignoreGlobal: true,
      include: "node_modules/**"
    }) //,
    //rollupUglify()
  ]
};
