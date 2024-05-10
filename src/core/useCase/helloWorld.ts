import { HelloWorld, IHelloWorldUseCase,  } from '../../types/helloWorld'
import { UseCaseContext } from '../../types/core';

export class HelloWorldUseCase implements IHelloWorldUseCase {
  private helloWorldService: UseCaseContext['helloWorldService'];

  constructor(ctx: UseCaseContext) {
    this.helloWorldService = ctx.helloWorldService;
  }

  helloWorld (): HelloWorld {
    return this.helloWorldService.messageHelloWorld()
  }
}