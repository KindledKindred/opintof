// copy custom static assets
new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../static'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
  },
  { // 追加
    from: path.resolve(__dirname, '../root'),
    to: config.build.assetsRoot,
    ignore: ['.*']
  }
])