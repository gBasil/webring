import { defineConfig } from 'vite-plus';

export default defineConfig({
	fmt: {
		singleQuote: true,
		jsxSingleQuote: true,
		useTabs: true,
		sortImports: {
			newlinesBetween: false,
			groups: [
				'type',
				{ newlinesBetween: true },
				'builtin',
				'external',
				['internal', 'subpath'],
				['parent', 'sibling', 'index'],
				'unknown',
				{ newlinesBetween: true },
				['side_effect', 'style', 'side_effect_style'],
			],
		},
	},
	staged: {
		'*': 'vp check --fix',
	},
	lint: {
		options: { typeAware: true, typeCheck: true },
		plugins: ['typescript', 'import', 'unicorn', 'eslint'],
		rules: {
			// For more info on an individual rule, go to:
			// https://oxc.rs/docs/guide/usage/linter/rules/<rule key>
			'typescript/consistent-type-imports': 'error',
			'import/consistent-type-specifier-style': 'error',
			'unicorn/prefer-node-protocol': 'error',
			'eslint/sort-imports': [
				'error',
				{
					// This interferes with `fmt.sortImports`, though this would be nice
					ignoreDeclarationSort: true,
				},
			],
		},
	},
});
