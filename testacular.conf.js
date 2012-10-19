// Testacular configuration
// Generated on Fri Oct 19 2012 10:16:00 GMT+0100 (BST)


// base path, that will be used to resolve files and exclude
basePath = '.';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  
  'lib/testacular/adapter_first.js', // first

  // all the sources, tests
  'src/**/*.js',
  'tests/**/*.spec.js',

  // require.js itself
  'lib/testacular/adapter_before.js',
  'lib/testacular/require.js',
  'lib/testacular/adapter_after.js'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: dots || progress
reporters = [ 'progress', 'junit' ];


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
