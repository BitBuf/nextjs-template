// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

/*
 * See /license-header.js to update this file header.
 *
 * Copyright (c) 2025 [YOUR NAME HERE]. All Rights Reserved.
 */

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePath = resolve(__dirname, '.gitignore');
const eslintIgnorePath = resolve(__dirname, '.eslintignore');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(eslintIgnorePath),
  ...compat.plugins('license-header'),
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb-base/rules/variables',
  ),
  eslintConfigPrettier,
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {
      'license-header/header': ['error', './license-header.js'],
      'no-unused-vars': 'off',
      'no-underscore-dangle': 'off',
      'no-multiple-empty-lines': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: [
      '**/*.spec.js',
      '**/*.tmp.js',
      '**/*.spec.jsx',
      '**/*.tmp.jsx',
      '**/*.spec.ts',
      '**/*.tmp.ts',
      '**/*.spec.tsx',
      '**/*.tmp.tsx',
    ],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    ignores: ['scripts'],
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
