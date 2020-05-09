module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': [
      1, {
        extensions: ['.js', '.jsx'] 
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/state-in-constructor': [1, 'never'],
    'react/destructuring-assignment': [1, 'always', { "ignoreClassFields": true }],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'sort-keys': [
      'error', 
      'asc', 
      {
        caseSensitive: true,
        natural: true,
        minKeys: 2
      }
    ]
  },
};
