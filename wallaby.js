module.exports = function (wallaby) {
  'use strict';
  return {
    files: [
      'lib/**/*.js*',
      'utilities/**/*.js*',
      'test-files/**/*.js*',
      '!lib/**/*.json',
      '!lib/**/*.spec.js*',
    ],

    tests: [
      'lib/**/*.spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'NODE_ENV=test'
      }
    },
    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        presets: ['latest', 'stage-1'],
        plugins: ['transform-object-rest-spread']
      })
    },
    setup() {
      global.navigator = {
        userAgent: 'node.js'
      };
    }
  };
};
