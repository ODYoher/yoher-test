import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import * as CONSTANTS from '../constants'
import routes from '../routes';

export class Server {
  constructor() {
    this.expressApp = express();
    this.middleware();
    routes.forEach(router => {
      this.expressApp.use('/', router);
    });
  }

  middleware () {
    this.expressApp.use(cors())
    this.expressApp.use(bodyParser.json())
    this.expressApp.use(bodyParser.urlencoded({ extended: false }))
  }

  start () {
    this.expressApp.listen(CONSTANTS.PORT, () => console.log('SERVER IS ON'))
  }
}

export default new Server();