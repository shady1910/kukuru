export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['site.css', 'node_modules/**'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'config',
          'custom-variant',
          'plugin',
          'reference',
          'source',
          'theme',
          'utility',
          'variant',
        ],
      },
    ],
    'declaration-block-no-duplicate-properties': true,
    'declaration-property-value-no-unknown': true,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['--alpha', '--modifier', '--spacing', '--value', 'theme'],
      },
    ],
    'import-notation': 'string',
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }],
    'property-no-unknown': true,
  },
};
