module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
    },
  },
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "brace-style": ["error", "stroustrup"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  "extends": [
    "eslint:recommended",
    "standard",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.0", // React version, default to the latest React stable release
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                   // propTypes object, e.g. `forbidExtraProps`.
                                                   // If this isn't set, any propTypes wrapped in
                                                   // a function will be skipped.
  },
};
