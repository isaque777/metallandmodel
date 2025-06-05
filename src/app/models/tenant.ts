import { Address } from './address';
import { Type } from './type';

export class Tenant {
  id: number | string = '';
  title!: string;
  code!: string;
  path!: string;
  url!: string;
  type!: Type;
  email!: string;
  code3Digits!: string;
  date!: Date;
  phoneNumber: string = '';
  phoneOperator: string = '';
  phoneWhatsapp: boolean = false;
  phone2Number: string = '';
  phone2Operator: string = '';
  phone2Whatsapp: boolean = false;
  creci: string = '';
  facebook: string = '';
  instagram: string = '';
  youtube: string = '';
  twitter: string = '';
  linkedin: string = '';
  blogger: string = '';
  flickr: string = '';
  address: Address = new Address();
  tenantIntegration: any = null;

  tenantFile: any[] = [];
  // tenantFiles: any[] = [];
  tenantType: any[] = [];
  tenantLink: any[] = [];
  selectedTenantType: any[] = [];
  selectedTenantNeighborhood: any[] = [];

  primaryColor: string = '';
  secondaryColor: string = '';
  fontColor: string = '';
  backgroundColor: string = '';
  backgroundImage: string = '';
}
