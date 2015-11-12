var path = process.cwd(),
    specPath = path + '/src/***/**/__spec__.js',
    srcPath = path + '/src/***/**/!(__spec__).js',
    preprocessors = {};

preprocessors[specPath] = ['webpack'];
preprocessors[srcPath] = ['webpack'];
preprocessors['src/test.js'] = ['webpack'];

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      'src/test.js',
      specPath
    ],
    frameworks: ['jasmine', 'es5-shim'],
    preprocessors: preprocessors,
    reporters: ['dots','coverage'],
    singleRun: true,
    autoWatch: false,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type : 'text-summary' },
        { type : 'html' }
      ],
      check: {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
        }
      }
    },
    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js?$/,
            exclude: [/node_modules/, path + '/src/***/**/__spec__.js'] ,
            loader: 'isparta'
          }
        ],
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
          }
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};

