module.exports = {
    root: true,

    env: { node: true },

    extends: [
        'plugin:vue/essential',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],

    plugins: [ 'ext' ],

    rules: {
        // ESLint rules for JavaScript
        //Source https://eslint.org/docs/rules
        'array-bracket-newline': [
            'error',
            {
                multiline: true,
                minItems: 2,
            },
        ],

        'array-bracket-spacing': [
            'error',
            'always',
        ],

        'array-element-newline': [
            'error',
            {
                multiline: true,
                minItems: 1,
            },
        ],

        'arrow-body-style': [
            'error',
            'as-needed',
        ],

        'arrow-parens': [
            'error',
            'as-needed',
        ],

        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],

        'block-spacing': [
            'error',
            'always',
        ],

        'brace-style': [
            'error',
            'stroustrup',
        ],

        'comma-dangle': [
            'error',
            'always-multiline',
        ],

        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],

        'comma-style': [
            'error',
            'last',
        ],

        'dot-location': [
            'error',
            'property',
        ],

        'dot-notation': 'error',

        'eol-last': [
            'error',
            'always',
        ],

        'func-call-spacing': [
            'error',
            'never',
        ],

        indent: [
            'error',
            4,
            { SwitchCase: 1 },
        ],

        'init-declarations': [
            'error',
            'always',
        ],

        'key-spacing': [
            'error',
            { afterColon: true },
        ],

        'keyword-spacing': [
            'error',
            {
                overrides: {
                    if: { after: false },
                    for: { after: false },
                    while: { after: false },
                    catch: { after: false },
                },
            },
        ],

        'max-statements-per-line': [
            'error',
            { max: 1 },
        ],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-const-assign': 'error',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-duplicate-imports': 'error',
        'no-multi-spaces': 'error',

        'no-multiple-empty-lines': [
            'error',
            { max: 1 },
        ],

        'no-return-assign': 'error',
        'no-script-url': 'error',

        'no-trailing-spaces': [
            'error',
            { ignoreComments: true },
        ],

        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',

        'no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],

        'no-useless-escape': 'off',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',

        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2,
                },

                ObjectPattern: { multiline: true },

                ImportDeclaration: {
                    multiline: true,
                    minProperties: 2,
                },

                ExportDeclaration: {
                    multiline: true,
                    minProperties: 2,
                },
            },
        ],

        'object-curly-spacing': [
            'error',
            'always',
        ],

        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: false },
        ],

        'padded-blocks': [
            'error',
            'never',
        ],

        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',

                next: [
                    'return',
                    'try',
                    'block',
                    'block-like',
                ],
            },

            {
                blankLine: 'always',

                prev: [
                    'const',
                    'let',
                ],

                next: '*',
            },

            {
                blankLine: 'any',

                prev: [
                    'const',
                    'let',
                ],

                next: [
                    'const',
                    'let',
                ],
            },
        ],

        'quote-props': [
            'error',
            'as-needed',
        ],

        quotes: [
            'error',
            'single',
        ],

        semi: [
            'error',
            'always',
        ],

        'semi-spacing': 'error',

        'semi-style': [
            'error',
            'last',
        ],

        'space-before-function-paren': [
            'error',
            'never',
        ],

        'space-in-parens': [
            'error',
            'never',
        ],

        'space-infix-ops': 'error',

        // ESLint rules for VueJS
        // Source https://eslint.vuejs.org/rules
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],

                alphabetical: true,
            },
        ],

        'vue/component-definition-name-casing': [
            'error',
            'kebab-case',
        ],

        'vue/component-tags-order': [
            'error',
            {
                order: [
                    'template',
                    'script',
                    'style',
                ],
            },
        ],

        'vue/html-closing-bracket-newline': [
            'error',
            {
                multiline: 'always',
                singleline: 'never',
            },
        ],

        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'never',
            },
        ],

        'vue/html-end-tags': 'error',

        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,

                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],

        'vue/mustache-interpolation-spacing': [
            'error',
            'always',
        ],

        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',

                    [
                        'delimiters',
                        'comments',
                    ],

                    [
                        'components',
                        'directives',
                        'filters',
                    ],

                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',

                    [
                        'props',
                        'propsData',
                    ],

                    'data',
                    'computed',
                    'watch',

                    // LIFECYCLE HOOKS 😉
                    'beforeCreate',
                    'created',
                    'beforeMount',
                    'mounted',
                    'beforeUpdate',
                    'updated',
                    'activated',
                    'deactivated',
                    'beforeDestroy',
                    'destroyed',

                    'methods',
                    'head',

                    [
                        'template',
                        'render',
                    ],

                    'renderError',
                ],
            },
        ],

        'vue/padding-line-between-blocks': [
            'error',
            'always',
        ],

        'vue/prop-name-casing': [
            'error',
            'camelCase',
        ],

        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
            },
        ],

        'vue/this-in-template': [
            'error',
            'never',
        ],

        'vue/v-bind-style': [
            'error',
            'shorthand',
        ],

        'vue/v-on-style': [
            'error',
            'shorthand',
        ],

        // ESLint rules for imports
        // Source https://github.com/benmosher/eslint-plugin-import
        'import/default': 'error',

        'import/dynamic-import-chunkname': [
            'error',
            {
                importFunctions: [ 'dynamicImport' ],
                // To configure the regex format you'd like to accept for the webpackChunkName
                webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
            },
        ],

        'import/export': 'warn',
        'import/first': 'error',

        'import/newline-after-import': [
            'error',
            { count: 1 },
        ],

        'import/no-cycle': [
            'error',
            { ignore: [ '/node_modules/' ] },
        ],

        // 'import/no-unresolved': [
        //     2,
        //     {
        //         commonjs: true,
        //         amd: true,
        //     },
        // ],
        'import/no-unresolved': [
            'warn',
            {
                caseSensitive: false,
            },
        ],

        'import/no-deprecated': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/no-self-import': 'error',

        'import/no-unused-modules': [
            'warn',
            {
                unusedExports: true,

                ignoreExports: [
                    '**/*.vue',
                    '**/*.config.js',
                ],
            },
        ],

        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],

                'newlines-between': 'always',

                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],

        'ext/lines-between-object-properties': [
            'error',
            'always',
            { exceptBetweenSingleLines: true },
        ],
    },

    parserOptions: { parser: 'babel-eslint' },

    overrides: [
        {
            files: [ '**/__tests__/*.{j,t}s?(x)' ],
            env: { mocha: true },
        },
    ],

    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.vue',
        ],

        // 'import/resolver': nuxt,
    },
};
