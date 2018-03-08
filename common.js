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
    'indent': [ 'error', INDENTS, { 'SwitchCase': 1 } ],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': [ 'error',
      { 'classes': 'always' },
    ],
    'template-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'max-statements-per-line': ['error', { 'max': STATEMENTS_PER_LINE }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-undef': 'error',
    'semi': 'error',
    'array-bracket-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': 'error',
    'space-in-parens': 'error',
    'key-spacing': 'error',
    'prefer-const': 'error',
  },
};
