import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __file = fileURLToPath(import.meta.url);
const __dir = path.dirname(__file);
const compat = new FlatCompat( { __dir, recommendedConfig: pluginJs.configs.recommended } );

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('airbnb'),
];
