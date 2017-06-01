module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
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
      "jsx-quotes": [
        "error", 
        "prefer-single",
      ],
      "max-len": [
        "error", 
        120,
      ],
    },
};
