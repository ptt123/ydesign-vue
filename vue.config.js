const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // chainWebpack: (config) => {
  //   config
  //     .plugin('webpack-bundle-analyzer')
  //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // },
})
