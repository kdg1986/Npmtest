import {terser} from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
// import pkg from "./package.json";

console.log(process.env.NODE_ENV);

const plugins = [
	terser(),
	typescript({
		tsconfig: "tsconfig.json",
	}),
];

export default [
	{
		input: "index.ts",
		output: [
			{file: "dist/ybutil.cjs.js", format: "cjs"},
			{file: "dist/ybutil.umd.js", format: "umd", name: "ybUtil"},
		],
		plugins,
	},
];
