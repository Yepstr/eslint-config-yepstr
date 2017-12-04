const INDENTS = 2;
const STATEMENTS_PER_LINE = 2;

module.exports = {
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2017,
  },
  'env': {
    'es6': true,
  },
  'rules': {
    'no-console': 'off',
    'no-extra-parens': ['error', 'functions'],
    'dot-location': ['error', 'property'],
    'no-magic-numbers': ['error', {
      'ignore': [-1, 0, 1, 2, 3, 10, 100, 1000],
      'ignoreArrayIndexes': true
    }],
    'indent': ['error', INDENTS],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': ['error', 'never'],
    'template-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'max-statements-per-line': ['error', { 'max': STATEMENTS_PER_LINE }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  },
};
