import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  mode: 'development', // - Это мод сборки (production / development)
  context: path.resolve('./', 'webpack', 'src'), // - Это контекст, путь который устанавливается как базовая в конфиг файле

  entry: {
    main: './index.js',
    click: './clicks.js',
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.join(path.resolve(), 'webpack', 'dist'),
  },

  // optimization: { // - Это часть оптимизации чанков
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],

  // Работа с лоадерами:

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    port: 4200,
    open: true,
  },
}

// scripts in package.json (build and dev)

// {
//   test: /\.(png|jpg|svg|gif)$/,
//   use: ['file-loader'],
// },
