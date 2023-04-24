import type {Config} from "jest";
import {defaults} from "jest-config";

const config: Config = {
	preset: "ts-jest",
	verbose: true,
	transform: {
		"^.+\\.test.ts?$": [
			"ts-jest",
			{
				diagnostics: {
					exclude: ["**"],
				},
			},
		],
	},
	moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
	testMatch: ["<rootDir>/__tests__/*.test.(js|jsx|ts|tsx)"],
	// moduleNameMapper: {
	// 	"^@MODULES/(.*)$": "<rootDir>/modules/$1",
	// },
};

export default config;
