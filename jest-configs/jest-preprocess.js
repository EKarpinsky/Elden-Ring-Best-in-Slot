const babelOptions = {
    presets: [
        '@babel/preset-react',
        'babel-preset-gatsby',
        '@babel/preset-typescript'
    ],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions)
// https://github.com/facebook/jest/issues/11444#issuecomment-847909076

