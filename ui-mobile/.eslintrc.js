module.exports = {
  extends: '../../.eslintrc.js',
  overrides: [
    {
      files: ['*.story.jsx'],
      rules: {
        'no-unused-expressions': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-webpack-loader-syntax': 0,
        'import/no-unresolved': 0,
      },
    },
  ],
};
