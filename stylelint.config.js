module.exports = {
    extends: [
        // Use the Standard config as the base
        // https://github.com/stylelint/stylelint-config-standard
        'stylelint-config-standard',

        // Enforce a standard order for CSS properties
        // https://github.com/stormwarning/stylelint-config-recess-order
        'stylelint-config-recess-order',
    ],

    plugins: [ 'stylelint-scss' ],

    rules: {
        // Rule list adapted from
        // https://stylelint.io/user-guide/rules
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'blockless-after-same-name-blockless',
                    'blockless-after-blockless',
                    'first-nested',
                ],

                ignore: [ 'after-comment' ],
                ignoreAtRules: [ 'else' ],
            },
        ],

        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always-single-line',

        // Allow SCSS and CSS module keywords beginning with `@`
        'at-rule-no-unknown': null,
        'at-rule-semicolon-newline-after': 'always',

        'at-rule-semicolon-space-before': [
            'never',
            { ignoreAtRules: [ 'include' ] },
        ],

        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-after': 'always-single-line',
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'color-named': 'never',
        'color-no-invalid-hex': true,

        'comment-no-empty': true,

        'declaration-block-no-duplicate-properties': true,

        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: [
                    'background',
                    'font',
                    'animation',
                    'transition',
                ],
            },
        ],

        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'never-single-line',
        'declaration-colon-space-after': 'always-single-line',

        'declaration-empty-line-before': [
            'always',
            {
                except: [ 'first-nested' ],

                ignore: [
                    'after-comment',
                    'after-declaration',
                    'inside-single-line-block',
                ],
            },
        ],

        'font-family-name-quotes': 'always-unless-keyword',
        'font-family-no-duplicate-names': true,

        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 1,
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',

        indentation: 4,

        'keyframe-declaration-no-important': true,
        'keyframes-name-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,

        'length-zero-no-unit': true,

        'max-empty-lines': 2,

        'max-line-length': [
            120,
            { ignore: [ 'comments' ] },
        ],

        'max-nesting-depth': 10,

        'media-feature-name-no-unknown': true,
        'media-query-list-comma-newline-before': 'never-multi-line',

        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-first-line': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,

        'number-leading-zero': 'never',
        'number-max-precision': 6,

        'property-no-unknown': [
            true,
            { ignoreProperties: [ /^color-/ ] },
        ],

        'rule-empty-line-before': [
            'always',
            {
                except: [
                    'after-single-line-comment',
                    'first-nested',
                ],

                ignore: [ 'after-comment' ],
            },
        ],

        'selector-attribute-operator-space-after': 'always',
        'selector-attribute-operator-space-before': 'always',
        'selector-attribute-quotes': 'always',
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-max-type': null,
        'selector-max-universal': 1,

        'selector-pseudo-class-no-unknown': [
            true,
            { ignorePseudoClasses: [ /* Exports the color palette to make it accessible to JS */ 'export' ] },
        ],

        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,

        'shorthand-property-no-redundant-values': true,

        'string-no-newline': true,
        'string-quotes': 'single',

        'time-min-milliseconds': null,

        'unit-no-unknown': true,

        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 1,
        'value-no-vendor-prefix': null,

        // Rule list adapted from
        // https://github.com/kristerkari/stylelint-scss#list-of-rules
        'scss/at-else-empty-line-before': 'never',
        'scss/at-rule-no-unknown': true,

        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': /^[a-z-]+$/,

        'scss/double-slash-comment-whitespace-inside': 'always',

        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,

        'scss/selector-no-redundant-nesting-selector': true,
    },
};
