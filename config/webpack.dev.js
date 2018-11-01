const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/main.js"
    },
    mode: "development",
    output: {
        filename: "js/[name]_bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
}