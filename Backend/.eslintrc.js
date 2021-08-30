module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest":true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {'comma-dangle': [2, 'never'], 'linebreak-style': 0, 'global-require': 0, 'eslint linebreak-style': [0, 'error', 'windows']

    }
};
