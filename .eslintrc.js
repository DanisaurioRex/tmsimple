module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "2020",
		sourceType: "module"
	},
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
	},
};