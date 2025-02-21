const { override, addWebpackPlugin } = require("customize-cra");
const webpack = require("webpack");

const addWebpackFallbacks = () => (config) => {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify"),
    vm: require.resolve("vm-browserify"),
    process: require.resolve("process/browser"),
  };
  return config;
};

const provideProcess = () => (config) => {
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
    })
  );
  return config;
};

module.exports = override(addWebpackFallbacks(), provideProcess());
