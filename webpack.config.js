const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: [
        './src/client/App.tsx'
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx","jsx", ".js", ".json"],
        alias: {
            Assets: path.resolve(__dirname, 'assets'),
            BaseComponent: path.resolve(__dirname, 'src/client/modules/Shared/Components/Base'),
            Variables: path.resolve(__dirname, 'src/client/modules/Shared/Variables'),
            Sass: path.resolve(__dirname, 'src/client/modules/Shared/Sass'),
            Library: path.resolve(__dirname, "src/client/modules/Shared/Library"),
            Redux: path.resolve(__dirname, 'src/client/redux'),

            App: path.resolve(__dirname, 'src/client/modules/App'),
            Shared: path.resolve(__dirname, 'src/client/modules/Shared'),
            Login: path.resolve(__dirname, 'src/client/modules/Login'),
            Register: path.resolve(__dirname, 'src/client/modules/Register'),
            Bus: path.resolve(__dirname, 'src/client/modules/Bus'),
            Home: path.resolve(__dirname, 'src/client/modules/Home'),
            Customer: path.resolve(__dirname, 'src/client/modules/Customer'),
            Ticket: path.resolve(__dirname, 'src/client/modules/Ticket'),
            Payment: path.resolve(__dirname, 'src/client/modules/Payment'),
            Brand: path.resolve(__dirname, 'src/client/modules/Brand'),
            NotFound: path.resolve(__dirname, 'src/client/modules/NotFound'),
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, loader: "ts-loader" 
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader" 
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader',  'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
              }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'manifest/index.html'
        }),
        new CleanWebpackPlugin(
            ['dist']
        )
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
    }
}