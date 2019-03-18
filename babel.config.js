const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      modules: 'commonjs',
    },
  ],
  '@babel/react',
];

const plugins = [
  'lodash',
  'react-hot-loader/babel',
  '@babel/plugin-syntax-dynamic-import',
  'universal-import',
  ['babel-plugin-styled-components', { ssr: true }],
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
