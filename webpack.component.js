const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
// 用于遍历
const glob = require('glob')
const entryList = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const component = file.split(/[/.]/)[2] // 组件name
    list[component] = `./${file}`
  }
}
makeList('UI/packages', entryList)

module.exports = {
  entry: entryList,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'yDesign',
    libraryTarget: 'umd',
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
    ],
  },
}
