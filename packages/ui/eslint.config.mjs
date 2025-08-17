import { config } from '@repo/eslint-config/react-internal';
import globals from 'globals';

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    files: ['*.config.js', '*.config.mjs', '*.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
