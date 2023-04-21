// https://runebook.dev/ko/docs/babel/-index-#Other%20Plugins
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

module.exports = {
	entry: "./main.ts",
	output: {
		path: path.resolve(__dirname, "./umd"),
		filename: "[name].bundle.js",
		// libraryTarget: "commonjs-static",
		// libraryTarget: "esm",
		library: {
			type: "umd",
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [new CleanWebpackPlugin()],
	// devtool: "source-map",
	mode: "development",
	experiments: {
		topLevelAwait: true,
	},
};
