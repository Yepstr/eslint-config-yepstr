module.exports = {
  'extends': './common.js',
  'parser': 'babel-eslint',
  'plugins': [
    'babel',
  ],
  'env': {
    'browser': true,
  },
  'rules': {
    'no-alert': 'error',
    'no-implicit-globals': 'error',
    'no-script-url': 'error',
    'strict': ['error', 'safe'],
  },
};
