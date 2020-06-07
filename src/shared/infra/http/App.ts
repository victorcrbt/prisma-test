import express from 'express';

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
  }

  private async middlewares() {
    this.server.use(express.json());
  }
}
