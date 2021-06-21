import path from 'path'

export default {
  entry: {
    main: './webpack/src/index.js',
    click: './webpack/src/clicks.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(path.resolve(), 'webpack', 'dist'),
  },
}
