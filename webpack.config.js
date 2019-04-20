
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var WebpackCleanPlugin = require('webpack-clean-plugin');

var production=process.env.production

module.exports = {

    mode:production=='true'?'production':'development',
    entry:{
        main:'./src/index.js'
    },
    output:{
        path:path.resolve('dist'),
        chunkFilename:'[id]-[hash].js',
        filename:'[name]-[hash].js'
    },

    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader : 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }
      ]
    },
    plugins: [
      // 请确保引入这个插件来施展魔法
      new VueLoaderPlugin(),
      new WebpackCleanPlugin({
        on: "emit",
        path: ['./dist']
    }),
      new HtmlWebpackPlugin({
        template:'./index.template.html'
      })

    ]



}




