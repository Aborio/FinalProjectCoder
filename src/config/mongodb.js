const URL = 'mongodb://localhost:27017/'

export default {
    mongodb: {
      url: URL,
      options: {
        retryWrites: true
      }
    }
  }