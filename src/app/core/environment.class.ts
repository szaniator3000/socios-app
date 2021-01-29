export abstract class Environment {
  abstract readonly production: boolean;
  abstract readonly apiUrl: string;
  abstract readonly baseHref: string;
  abstract readonly assetsHref: string;
}
