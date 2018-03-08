const INDENTS = 2;
const MAX_PROPS_PER_LINE = 2;

module.exports = {
  'extends': ['./browser.js', 'plugin:react/recommended'],
  'plugins': [
    'react',
  ],
  'rules': {
    'jsx-quotes': ['error', 'prefer-double'],

    'react/jsx-indent': ['error', INDENTS],
    'react/jsx-indent-props': ['error', INDENTS],
    'react/jsx-max-props-per-line': ['error', { maximum: MAX_PROPS_PER_LINE }],
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/no-multi-comp': ['error', { 'ignoreStateless': true }],

    'react/prop-types': 'off', // does not work well with recompse

    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
  },
};
