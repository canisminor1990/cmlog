module.exports = {
  parser       : "babel-eslint",
  extends      : [
    "standard",
    "prettier",
    "prettier/standard"
  ],
  plugins      : [
    "prettier",
    "standard"
  ],
  parserOptions: {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  env          : {
    "es6" : true,
    "node": true
  },
  rules        : {
    "prettier/prettier": [
      2, {
        "printWidth"   : 100,
        "singleQuote"  : true,
        "trailingComma": "es5",
        "parser"       : "flow"
      }
    ],
    "one-var"          : 0
  }
};