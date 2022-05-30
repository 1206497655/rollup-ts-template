const json = require("@rollup/plugin-json");
const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { cleandir } = require("rollup-plugin-cleandir");

module.exports = {
  /** 打包入口文件 */
  input: ["./src/index.ts"],
  output: {
    dir: "./lib",
    format: "esm",
  },
  plugins: [
    /** 配置插件 - 每次打包清除目标文件 */
    cleandir("./lib"),
    /** 配置插件 - 将json转换为ES6模块 */
    json(),
    /** 配置插件 - 将json转换为ES6模块 */
    typescript({
      module: "esnext",
      exclude: ["./node_modules/**"],
    }),
    resolve.default({
      extensions: [".js", ".ts", ".json"],
      modulesOnly: true,
      preferredBuiltins: false,
    }),
    commonjs({ extensions: [".js", ".ts", ".json"] }),
  ],
};
