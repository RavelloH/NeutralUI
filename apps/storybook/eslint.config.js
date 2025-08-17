import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Basic rules only
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', '*.config.ts'],
  },
];
