const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

class LogNoTypeErrorsPlugin {
  apply(compiler) {
    const hooks = ForkTsCheckerWebpackPlugin.getCompilerHooks(compiler);
    hooks.issues.tap('LogNoTypeErrorsPlugin', (issues) => {
      const hasErrors = issues.some((issue) => issue.severity === 'error');
      if (!hasErrors) {
        console.log('No type errors found');
      }
      return issues;
    });
  }
}

module.exports = {
  entry: path.resolve(__dirname, 'main.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: path.resolve(__dirname, 'tsconfig.json') },
    }),
    new LogNoTypeErrorsPlugin(),
  ],
  devtool: 'source-map',
};
