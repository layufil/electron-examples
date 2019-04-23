import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

module.exports = [
  {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: 'electron-main',
    entry: './src/browser/main.js',
    output: {
      path: path.join(__dirname, 'build/browser'),
      filename: 'main.js'
    },
    node: {
      __dirname: false,
      __filename: false
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src/browser')]
      }]
    }
  },
  {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: 'electron-renderer',
    entry: './src/renderer/index.js',
    output: {
      path: path.join(__dirname, 'build/renderer'),
      filename: 'index.js'
    },
    node: {
      __dirname: false,
      __filename: false
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src/renderer')]
      }]
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: 'src/renderer/index.html',
        to: '.'
      }])
    ]
  }
]
