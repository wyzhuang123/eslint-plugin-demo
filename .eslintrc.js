module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "6",
        "sourceType": "module",
        "project": ['./tsconfig.json'],
        "ecmaFeatures": {
            "modules": true
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-var-require": "error"
    }
}