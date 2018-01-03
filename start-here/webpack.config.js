const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    watch:true,
    watchOptions:{
        aggregateTimeout: 5000,
        poll: true,
        poll: 500,
    },
    recordsPath: path.resolve(__dirname, 'build/records.json'),
    recordsInputPath: path.resolve(__dirname, 'build/records.json'),
    recordsOutputPath: path.resolve(__dirname, 'build/records.json'),
};
