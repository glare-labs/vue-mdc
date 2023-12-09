module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'warn',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'array-callback-return': 'error',
        'constructor-super': 'warn',
        'for-direction': 'error',
        'no-debugger': 'error',
        'no-duplicate-case': 'warn',
        'no-duplicate-imports': 'error',
        'no-fallthrough': 'error',
        'no-irregular-whitespace': 'error',
        'class-methods-use-this': 'error',
        'id-length': [
            'error',
            {
                'min': 2,
                'max': 64,
            },
        ],
        'no-loop-func': 'warn',
        'no-var': 'warn',
        'no-with': 'error',
        'line-comment-position': [
            'error',
            {
                'position': 'above'
            }
        ],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn'
    },
}
