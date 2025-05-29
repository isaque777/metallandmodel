import { City } from './city';

export class Address {
  id;
  addressNeighbourhood: any[] = [];
  city: City;
  region: string;
  appartmentNumber: any;
  streetName: any;
  streetNumber: any;
  addressAdditional: any;
  neighbourhood: any;
  selectedAddressNeighbourhood: any[] = [];
  postalCode: any;
}
