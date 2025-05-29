import { Type } from './type';

export class Tenant {
  id;
  title: string;
  code: string;
  path: string;
  url: string;
  type: Type;
  email: string;
  code3Digits: string;
  date: Date;
  phoneNumber;
  phoneOperator;
  phoneWhatsapp;
  phone2Number;
  phone2Operator;
  phone2Whatsapp;
  creci;
  facebook;
  instagram;
  youtube;
  twitter;
  linkedin;
  blogger;
  flickr;
  address;
  tenantIntegration;

  tenantFile: any[] = [];
  // tenantFiles: any[] = [];
  tenantType: any[] = [];
  tenantLink: any[] = [];
  selectedTenantType: any[] = [];
  selectedTenantNeighbourhood: any[] = [];

  primaryColor;
  secondaryColor;
  fontColor;
  backgroundColor;
  backgroundImage;
}
