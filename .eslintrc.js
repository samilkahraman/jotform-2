module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 6
  },
  extends: ["airbnb", "prettier"],
  plugins: ["react", "prettier"],

  rules: {
    "no-console": "warn",
    "no-inline-comments": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/extensions": 0,
    "linebreak-style": 0,
    "import/no-unresolved": 0,
    "react/forbid-prop-types": 0,
    "arrow-parens": 0,
    "comma-dangle": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-one-expression-per-line": 0,
    "import/prefer-default-export": 0,
    "react/jsx-closing-bracket-location": "warn"
  }
};
