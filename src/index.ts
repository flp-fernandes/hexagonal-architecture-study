import { createContainer } from './interface/container';
import { logger } from './util/logger';

type AppConfig = {
  http?: boolean;
}

export class App {
  private _http?: boolean;

  constructor({ http }: AppConfig) {
    this._http = http;
  }

  run(): void {
    const interfaceContainer = createContainer({
      init: {
        http: this._http
      }
    });

    if (this._http) {
      interfaceContainer.httpInterface?.serve();
    }
  }
}

const app = new App({
  http: true,
});

setImmediate(() => {
  app.run();
  logger(App.name).debug('App initialized');
})