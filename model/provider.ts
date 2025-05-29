import { ProviderFile } from './providerFile';

export class Provider {
  id;
  name: string;
  url: string;
  description: string;
  subTitle: string;
  providerFiles: ProviderFile[] = [];
}
