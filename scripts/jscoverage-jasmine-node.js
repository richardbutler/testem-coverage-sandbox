require('jasmine-node');
require('jscoverage-reporter');

var path = require('path'),
    fs = require('fs'),
    jasmineEnv = jasmine.getEnv(),
    outputDir = path.normalize(__dirname + '/../reports/coverage/node');

fs.mkdirSync(outputDir);

jasmineEnv.addReporter(new jasmine.JSCoverageReporter(outputDir));
require('../node_modules/jasmine-node/lib/jasmine-node/cli.js');