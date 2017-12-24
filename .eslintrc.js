module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "prettier",
    ],
    "env": {
      "browser": true,
      "es6": true,
      "jquery": true,
    },
    "globals": {
      "chrome": false,
    },
    "rules": {
      "max-len": [
        "error", 
        120,
      ],
      "no-plusplus": [
        "error",
        { 
          "allowForLoopAfterthoughts": true
        },
      ],
      "react/sort-comp": 0,
      "prettier/prettier": ["error", {
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "all",
      }],
    },
};
