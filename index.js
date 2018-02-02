module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": false
        }
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "jquery": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "globals": {
        "gdn": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "no-cond-assign": [
            "error",
            "always"
        ],
        "no-console": "warn",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-invalid-regexp": 1,
        "no-irregular-whitespace": "error",
        "no-negated-in-lhs": 1,
        "no-unreachable": "error",
        "use-isnan": "error",

        // Map JSDoc tags to be more similar to our PHP DocBlocks
        "valid-jsdoc": [
            "error",
            {
                "prefer": {
                    "arg": "param",
                    "argument": "param",
                    "class": "constructor",
                    "return": "returns",
                    "virtual": "abstract"
                },
                "preferType": {
                    "Boolean": "boolean",
                    "Number": "number",
                    "object": "Object",
                    "String": "string"
                },
                "requireReturn": false
            }
        ],
        "valid-typeof": "error",
        "no-unexpected-multiline": "error",
        "consistent-return": "error",
        "curly": [
            "error",
            "all"
        ],
        "default-case": 1,
        "dot-location": [
            1,
            "property"
        ],
        "eqeqeq": "error",
        "guard-for-in": 1,
        "no-alert": "error",
        "no-extend-native": "error",
        "no-loop-func": 1,
        "no-multi-spaces": 1,
        "no-new-func": 1,
        "no-redeclare": [
            "error",
            {
                "builtinGlobals": true
            }
        ],
        "radix": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-unused-vars": "error",
        "no-use-before-define": [
            "error",
            "nofunc"
        ],
        "brace-style": "error",
        "camelcase": [
            "error",
            {
                "properties": "always"
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": "error",
        "eol-last": "error",
        "func-names": "error",
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "key-spacing": [
            "error",
            {
                "afterColon": true
            }
        ],
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true
            }
        ],
        "max-nested-callbacks": [
            "error",
            4
        ],
        "new-cap": [
            "error",
            {
                "newIsCap": false,
                "capIsNew": false
            }
        ],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "error",
        "no-trailing-spaces": "error",
        "one-var": ["error", "never"],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "semi": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "constructor-super": "error",
        "no-var": "error",
        "object-shorthand": [
            "error",
            "properties"
        ],
        "prefer-const": "error"
    }
}
