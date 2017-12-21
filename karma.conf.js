// Karma configuration
// Generated on Tue Dec 12 2017 08:54:39 GMT-0500 (Eastern Standard Time)

module.exports = (config) => {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine-jquery', 'jasmine', 'jasmine-matchers', 'chai', 'sinon', 'chai-sinon'],

		// list of files / patterns to load in the browser
		files: [
			'node_modules/angular/angular.min.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/bardjs/dist/bard.js',
			'http://sinonjs.org/releases/sinon-1.9.0.js',
			'tests/lib/bc-utils.min.js',
			'node_modules/jquery/dist/jquery.min.js',
			'js/app/*.js',
			'js/app/**/*.constants.js',
			'js/app/**/*.model.js',
			'js/app/**/*.provider.js',
			'js/app/**/*.service.js',
			'js/app/**/*.directive.js',
			'js/app/**/*.controller.js',
			'js/*.js',
			'tests/unit/*.spec.js',
			'tests/unit/app/*.spec.js',
			'tests/unit/app/**/*.spec.js',
			{
				pattern: 'tests/fixtures/*.html',
				included: false,
				served: true,
			},
			{
				pattern: 'tests/fixtures/app/**/*.html',
				included: false,
				served: true,
			},
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'js/app/*.js': ['coverage'],
			'js/app/**/*.js': ['coverage'],
			'js/*.js': ['coverage'],
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha', 'coverage', 'coveralls'],

		coverageReporter: {
			type: 'lcovonly',
			dir: 'tests/coverage/',
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values:
		// config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
		// config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		plugins: [
			'karma-jasmine-jquery',
			'karma-mocha-reporter',
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-coverage',
			'karma-coveralls',
			'karma-sinon',
			'karma-chai',
			'karma-chai-sinon',
			'karma-jasmine-matchers',
		],
	});
};
