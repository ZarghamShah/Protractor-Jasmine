exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'gecko',
    chromeOptions: {
      args: ['--start-fullscreen', '--disable-infobars',]
    }
  },
  specs: '*/**.js',
  framework: 'jasmine',
  loggingPrefs: {
    'driver': 'WARNING',
    'server': 'WARNING',
    'browser': 'INFO'
  },
  params: {
    login: {
      username: 'angular',
      password: 'password'
    },
  },

  }
  
