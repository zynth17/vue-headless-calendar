/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},

	plugins: ['@typescript-eslint', 'vuejs-accessibility'],
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
		'prettier',
	],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
	env: {
		'vue/setup-compiler-macros': true,
	},
	overrides: [
		{
			files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
			extends: ['plugin:cypress/recommended'],
		},
	],
	rules: {
		'prettier/prettier': [
			'warn',
			{},
			{
				usePrettierrc: true,
			},
		],
		'vue/multi-word-component-names': [
			'off',
			{
				ignores: [],
			},
		],

		'@typescript-eslint/no-unused-vars': ['off'],
	},
};
