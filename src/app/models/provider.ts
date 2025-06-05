import { ProviderFile } from './providerFile';

export class Provider {
  id!: number;
  name!: string;
  url!: string;
  description!: string;
  subTitle!: string;
  providerFiles: ProviderFile[] = [];
}
