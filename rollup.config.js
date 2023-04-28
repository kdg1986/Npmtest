import {babel} from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json" assert {type: "json"};
import cdnUpload from "rollup-plugin-cdn-upload";

// console.log(pkg);

const plugins = [
	typescript({
		tsconfig: "tsconfig.json",
	}),
];

export default [
	{
		input: "index.ts",
		output: [
			{file: "bundle.cjs.js", format: "cjs"},
			{name: "ybUtil", file: "bundle.umd.js", format: "umd"},
		],
		plugins,
	},
];
