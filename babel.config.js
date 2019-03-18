const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      modules: 'commonjs',
    },
  ],
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-spread',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
];

const overrides = [
  {
    test: ['**/server/**'],
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/env',
        {
          modules: 'commonjs',
        },
      ],
    ],
  },
];

module.exports = { presets, plugins, overrides };
