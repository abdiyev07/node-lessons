import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

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

  optimization: {
    // - Это часть оптимизации чанков
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve('./', 'webpack', 'src', 'favicon.ico'),
          to: path.resolve('./', 'webpack', 'dist'),
        },
      ],
    }),
  ],

  // Работа с лоадерами:

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(jpg|svg|png|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    port: 4200,
    open: true,
  },
}

// scripts in package.json (build and dev)
