import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
  {
    name: 'project/ignores',
    ignores: ['node_modules/**'],
  },
  js.configs.recommended,
  {
    name: 'project/browser-javascript',
    files: ['script.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        document: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  eslintConfigPrettier,
];
