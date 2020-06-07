import express from 'express';

import routes from './routes';

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private async middlewares() {
    this.server.use(express.json());
  }

  private async routes() {
    this.server.use(routes);
  }
}
