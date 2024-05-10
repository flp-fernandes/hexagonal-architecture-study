import { IHelloWorldUseCase, IHelloWorldService } from './helloWorld';

export type Container = {
  helloWorldUseCase: IHelloWorldUseCase;
};

export type UseCaseContext = {
  helloWorldService: IHelloWorldService;
};
