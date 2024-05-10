import { Container } from '../types/core';
import { HelloWorldService } from './service/helloWorld';
import { HelloWorldUseCase } from './useCase/helloWorld';

export function createContainer(): Container {
  const useCaseContext = {
    helloWorldService: new HelloWorldService(),
  }

  return {
    helloWorldUseCase: new HelloWorldUseCase(useCaseContext),
  }
}