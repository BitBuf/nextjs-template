/*
 * See /license-header.js to update this file header.
 *
 * Copyright (c) 2025 [YOUR NAME HERE]. All Rights Reserved.
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'config',
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
      ],
    ],
  },
};
