import { HttpControllerConfig, HttpNext, HttpRequest, HttpResponse, HttpRouter, IHttpRoute } from '../../../types/interface';

export class HelloWorldController implements IHttpRoute {
  private helloWorldUseCase: HttpControllerConfig['coreContainer']['helloWorldUseCase'];

  constructor({ coreContainer }: HttpControllerConfig) {
    this.helloWorldUseCase = coreContainer.helloWorldUseCase;
  }

  register(router: HttpRouter): void {
    router
      .route('/hello-world')
      .get(this.getHelloWorld.bind(this))
  }

  public getHelloWorld(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    const result = this.helloWorldUseCase.helloWorld();

    res.status(200).send(result);
  }
}