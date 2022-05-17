module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'eslint-plugin-react-native',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'linebreak-style': 0,
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'react/button-has-type': 'off',
    'default-param-last': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-tabs': 0,
    'react/function-component-definition': 'off',
  },
};
