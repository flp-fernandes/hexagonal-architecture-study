import express from 'express';
import helmet from 'helmet';

import { IHttpInterface, IHttpRoute } from '../../types/interface';
import { Container } from '../../types/core';
import { HelloWorldController } from './controller/helloWorld';
import cors from 'cors';
import compression from 'compression';

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
      helmet(),
      cors(),
      compression(),
      express.json({
        limit: '500kb'
      }),
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