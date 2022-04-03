import mongoose from 'mongoose';
import * as mongooseToJSON from '@meanie/mongoose-to-json';

import * as CONSTANTS from '../constants'

export class Database {
  constructor() {
    this.url = CONSTANTS.DATABASE_SRV;
  }

  setUpPlugins () {
    mongoose.plugin(mongooseToJSON);
  }

  connect () {
    mongoose.connect(this.url).then(() => console.log('CONNECTED ON DATABASE'))
  }
}

export default new Database();