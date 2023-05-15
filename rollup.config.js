import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";
import cdnUpload from "rollup-plugin-cdn-upload";
import {mkdir, writeFile} from "node:fs";
import {arch} from "node:os";
// import path from "path";
import pkg from "./package.json";

const plugins = [
	terser(),
	typescript({
		tsconfig: "tsconfig.json",
	}),
];

const ESM = {
	input: "index.ts",
	output: {file: pkg.main, format: "esm"},
	plugins,
};
const CJS = {
	input: "index.ts",
	output: {file: pkg.main, format: "cjs"},
	plugins,
};
const UMD = {
	input: "index.ts",
	output: {file: "dist/ybutil.umd.js", format: "umd", name: "ybUtil"},
	plugins: [
		cdnUpload({
			uploader: async (content, ext) => {
				// const res = await fetch("http://localhost:3001", {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 	},
				// 	body: JSON.stringify({
				// 		fileName: `ybutil.umd.${pkg.version}.js`,
				// 		body: content,
				// 	}),
				// });

				// mkdir("./asdasd");
				console.group("build uploader");
				console.info(`OS : ${process.platform}`);
				console.groupEnd();

				// mkdir("/Users/kdg1986/develop/abcd", {recursive: true}, err => {});
				// mkdir("static", {recursive: true}, err => {
				// 	writeFile("static/ybtuils.js", content, err => {
				// 		if (err) throw err;
				// 		console.log("The file has been saved!");
				// 	});
				// });

				// res.status === 200 && console.log("upload complete");
				return Promise.resolve(content);
			},
		}),
		...plugins,
	],
};

export default [UMD];
