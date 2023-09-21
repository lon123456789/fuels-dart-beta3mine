const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
    mode: "production",
    entry: {
        beta3_wallet: path.resolve(__dirname, "..", "src", "fuel_wallet_beta3.ts"),
    },
    output: {
        path: path.join(__dirname, "../../lib/js"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new NodePolyfillPlugin()],
};
