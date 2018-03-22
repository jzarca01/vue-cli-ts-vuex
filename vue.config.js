var path = require("path");
var conf = require("./config");

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.output
      .path(conf.build.assetsRoot)
      .publicPath(
        process.env.NODE_ENV === "production"
          ? conf.build.assetsPublicPath
          : conf.dev.assetsPublicPath
      );

    config.resolve.extensions.merge([".ts", ".js", ".vue", ".json"]);
    config.resolve.alias.merge({
      src: path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      Components: path.resolve(__dirname, "./src/components"),
      Views: path.resolve(__dirname, "./src/views"),
      Store: path.resolve(__dirname, "./src/store")
    });

    const bookRule = config.module.rule("storybook").test(/\.md$/);
    bookRule.use("html").loader("html-loader");
    bookRule.use("markdown").loader("markdown-loader");

    config.module.rules.delete("svg");

    const svgRule = config.module.rule("svg-sprite").test(/\.svg$/);
    svgRule.use("svg-sprite").loader("svg-sprite-loader");
    svgRule.use("svgo").loader("svgo-loader");
  }
};
