import { createContainer as createCoreContainer } from '../core/container';

import { IHttpInterface } from '../types/interface';
import { HttpInterface } from './http';

type ContainerConfig = {
  init: {
    http?: boolean;
  }
}

type Container = {
  httpInterface?: IHttpInterface;
}

export function createContainer(config: ContainerConfig): Container {
  const container: Container = {};

  const coreContainer = createCoreContainer();

  if (config.init.http) {
    container.httpInterface = new HttpInterface({ coreContainer });
  }

  return container;
}