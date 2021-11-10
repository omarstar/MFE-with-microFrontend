// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.optimization.splitChunks = {
        chunks(chunk) {
          return false;
        },
      };
      webpackConfig.optimization.runtimeChunk = false;
      webpackConfig.output.filename = "static/js/micro-payment.js";
      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  },
};
