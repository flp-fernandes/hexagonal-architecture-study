export type HelloWorld = {
  messsage: string;
}

export interface IHelloWorldUseCase {
  helloWorld(): HelloWorld;
}

export interface IHelloWorldService {
  messageHelloWorld(): HelloWorld;
}