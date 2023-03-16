module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	extends: [
		'plugin:vue/essential',
		'airbnb-base',
		'plugin:prettier/recommended' // 添加 prettier 插件
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
