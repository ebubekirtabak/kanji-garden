const { Client } = require('pg');

const self =  {
    init: async () => {
      if (self.client) return self.client;
      self.client = new Client();
      await self.client.connect();
      return self.client;
    }
}

module.exports = self;