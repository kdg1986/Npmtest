// https://runebook.dev/ko/docs/babel/-index-#Other%20Plugins
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

const resolve = {
	alias: {
		"@": path.resolve(__dirname, "."),
		"@MODULES": path.resolve(__dirname, "./modules"),
	},
	extensions: [".ts", ".js"],
};

const modules = {
	rules: [
		// {
		// 	test: /\.js$/,
		// 	exclude: /node_modules/,
		// 	use: {
		// 		loader: "babel-loader",
		// 	},
		// },
		{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: {
				loader: "ts-loader",
			},
		},
	],
};

const plugins = [new CleanWebpackPlugin()];

const experiments = {};

const UMD = {
	mode: "production",
	entry: {ybUtils: "./index.ts"},
	output: {
		path: path.resolve(__dirname, "./umd"),
		filename: "[name].umd.production.js",
		library: {
			type: "umd",
		},
	},
	module: {...modules},
	resolve,
	plugins,
	experiments: {
		topLevelAwait: true,
	},
};

const ESM = {
	mode: "development",
	entry: {ybUtils: "./index.ts"},
	output: {
		path: path.resolve(__dirname, "./esm"),
		filename: "[name].esm.production.js",
		library: {
			type: "commonjs-static",
		},
	},
	module: {...modules},
	resolve,
	plugins,
	experiments,
};

module.exports = (env, options) => {
	return [UMD, ESM];
};
