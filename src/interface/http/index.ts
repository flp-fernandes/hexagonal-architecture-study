import express from 'express';

import { IHttpInterface, IHttpRoute } from '../../types/interface';
import { Container } from '../../types/core';
import { HelloWorldController } from './controller/helloWorld';

type Config = {
  coreContainer: Container;
}

export class HttpInterface implements IHttpInterface {
  private app?: express.Application;
  private coreContainer: Config['coreContainer'];

  constructor(config: Config) {
    this.coreContainer = config.coreContainer;
  }

  initApp(): void {
    this.app = express();

    this.app.use(
      express.json()
    );

    this.setupRoutes();
    this.setupNotFound();
  }

  setupRoutes(): void {
    [
      new HelloWorldController({
        coreContainer: this.coreContainer,
      })
    ].forEach((route: IHttpRoute) => {
      const router = express.Router({ mergeParams: true });
      route.register(router);
      this.app?.use(router);
    })
  }

  setupNotFound(): void {
    this.app?.use(
      '*',
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        next(new Error('Page not found'));
      },
    );
  }

  serve (): void {
    this.initApp();
    this.app?.listen(3000);
  }
}