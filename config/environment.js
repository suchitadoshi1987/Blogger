/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'blogger-cli',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  if (environment === 'development') {
	  ENV.contentSecurityPolicy = {
		  'default-src': "'none' 'self'",
		  'script-src': "'self' 'unsafe-eval' http://*:35729",
		  'font-src': "'self'",
		  'connect-src': "'self' 'localhost'",
		  'style-src': "'self' 'unsafe-inline'"
	  };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
	  ENV.contentSecurityPolicy = {
		  'default-src': "'none' 'self'",
		  'script-src': "'self' 'localhost' 'unsafe-inline' 'unsafe-eval' 0.0.0.0:35729",
		  'font-src': "'self'",
		  'connect-src': "'self' 'localhost'",
		  'style-src': "'self' 'unsafe-inline'"
	  };

  }

  return ENV;
};
