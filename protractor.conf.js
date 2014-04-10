// An example configuration file.
exports.config = {
  // Do not start a Selenium Standalone sever - only run this using chrome.

  chromeDriver: 'lib/chromedriver.exe',
  seleniumServerJar: 'lib/selenium-server-standalone-2.41.0.jar',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  baseUrl: 'http://localhost:11233'

};
