var env = jasmine.getEnv();
env.addReporter(new jasmine.JSCoverageReporter('./reports/coverage/browser'));