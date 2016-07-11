var webpack = require('webpack');
var path = require('path');



module.exports = {
    entry: [
      path.resolve(__dirname, 'index.js')
    ],
    output: {
        path: './build',

        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json','.css'],
        modulesDirectories: [
          'node_modules'
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};
