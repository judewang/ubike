import webpack from "webpack";
import path from "path";

let context = path.resolve(__dirname, "app");

export default {
  context: context,
  entry: [
    'index.js'
  ],
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)$/,
      include: context,
      loader: 'babel?cacheDirectory'
    },{
      test: /\.cjsx$/,
      include: context,
      loaders: ['coffee', 'cjsx']
    },{
      test: /\.coffee$/,
      include: context,
      loader: 'coffee'
    },{
      test: /\.css$/,
      include: context,
      loaders: ['style', 'css']
    }]
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'app')
    ],
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee']
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app/'),
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: "react"
    })
  ],
  debug: true
};
