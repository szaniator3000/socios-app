import { Environment } from './environment.class';

class EnvironmentDev implements Environment {
  production = false;
  apiUrl = '';
  baseHref = '';
  assetsHref = '';
}

export const environment: Environment = new EnvironmentDev();
