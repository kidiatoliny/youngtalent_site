module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react',
    "plugin:react-hooks/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'prettier',
    "react-hooks"
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope":'off'

  },
  settings: {
    react: {
      version: 'detect',
    }
  }
}
