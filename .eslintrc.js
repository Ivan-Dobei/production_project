// eslint-disable-next-line no-undef
module.exports = {
   'env': {
      'browser': true,
      'es2021': true,
      'jest': true,
   },
   'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
   ],
   'overrides': [
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module',
   },
   'plugins': [
      'react',
      '@typescript-eslint',
   ],
   'rules': {
      'no-console': 'warn',
      'prefer-const': 'error',
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'indent': ['warn', 3],
      'react/jsx-indent': ['warn', 3],
      'react/react-in-jsx-scope': 'off',
      'max-len': ['error', {'code': 120, 'ignoreComments': true}],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['warn', 'always'],

   },
};
