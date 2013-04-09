basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'src/main/webapp/lib/angular/angular.js',
    'src/main/webapp/lib/angular/angular-*.js',
    'src/test/js/lib/angular/angular-mocks.js',
    'src/main/webapp/js/**/*.js',
    'src/test/js/unit/**/*.js'
];

autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = [
  'Chrome'
];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
