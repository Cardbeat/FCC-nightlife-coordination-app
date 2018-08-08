const path = require('path');

module.exports = {
    mode: 'development',
    entry: __dirname + '/app/client/public/scripts/index.js',
    output: {
        path: __dirname+'/app/client/public/scripts/',
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, '/app/client/public/')
    },
    module: {
        rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
    }
}