import { City } from './city';

export class Address {
  id: number | string = 0;
  addressNeighborhood: any[] = [];
  city: City = {} as City;
  region: string = '';
  apartmentNumber: any;
  streetName: any;
  streetNumber: any;
  addressAdditional: any;
  neighborhood: any;
  selectedAddressNeighborhood: any[] = [];
  postalCode: any;
}
