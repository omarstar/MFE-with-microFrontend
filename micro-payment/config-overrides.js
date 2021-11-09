const { override, addPostcssPlugins, disableEsLint } = require("customize-cra");
module.exports = {
  webpack: override(
    (config, env) => {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      config.output.filename = "static/js/[name].js";
      config.plugins[5].options.filename = "static/css/[name].css";
      config.plugins[5].options.moduleFilename = () => "static/css/main.css";
      // override tailwind config
      return config;
    },
    addPostcssPlugins([
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ]),
    disableEsLint()
  ),
};
// module.exports = {
//   webpack: (config, env) => {
//     config.optimization.runtimeChunk = false;
//     config.optimization.splitChunks = {
//       cacheGroups: {
//         default: false,
//       },
//     };
//     config.output.filename = "static/js/[name].js";
//     config.plugins[5].options.filename = "static/css/[name].css";
//     config.plugins[5].options.moduleFilename = () => "static/css/main.css";
//     // override tailwind config
//     return config;
//   },
// };
