import { HelloWorld, IHelloWorldService } from '../../types/helloWorld';

export class HelloWorldService implements IHelloWorldService {
  messageHelloWorld (): HelloWorld {
    return {
      messsage: 'hello world'
    }
  }
  
}