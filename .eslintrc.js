module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:react/recommended', 'plugin:import/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['.cache', '.next', '.storybook', 'storybook-static', 'next-env.d.ts', 'node_modules', 'src/API', 'lib', 'build', 'dist', '**/env/*.js'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      'no-undef': 'off'
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-ignore': 'allow-with-description'
    }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/order': ['error', {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc'
      },
      groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
      'newlines-between': 'always'
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', {
      arrowParens: 'always',
      bracketSpacing: true,
      jsxSingleQuote: true,
      parser: 'typescript',
      printWidth: 200,
      semi: true,
      singleQuote: true,
      tabWidth: 4,
      trailingComma: 'none',
      useTabs: true
    }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-curly-brace-presence': ['error', {
      children: 'never',
      props: 'never'
    }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      ignoreCase: true,
      multiline: 'last',
      noSortAlphabetically: false,
      reservedFirst: false,
      shorthandFirst: false,
      shorthandLast: true
    }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'require-jsdoc': 'off',
    'sort-keys-fix/sort-keys-fix': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js']
    },
    react: {
      version: 'detect'
    }
  }
};