module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true
    }],
    "indent": "off",
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": "off",
    "no-use-before-define": ["error", {"functions": false, "classes": false}],
    "object-curly-spacing": "off",

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
