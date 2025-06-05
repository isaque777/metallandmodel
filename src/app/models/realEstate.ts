import { City } from './city.js';
import { Address } from './address.js';

export class RealEstate {
  id: number = 0;
  code: string = '';
  description!: string;
  subTitle!: string;
  realEstateFiles: any[] = [];
  realEstateType: any[] = [];
  realEstateLink: any[] = [];
  realEstatePeople: any[] = [];
  startDate: any = null;
  currentLabel!: string;
  status!: string;
  isRented!: string;
  published!: string;
  occupied: any = null;
  nonOccupiedFrom: any = null;
  condoName!: string;
  showAddress: any = null;
  privativeArea: any = null;
  deliverDate: any = null;
  buildingInProgress: any = null;
  city!: City;
  memo!: string;
  address: Address = new Address();
  apartmentNumber: any = null;
  landLength: any = null;
  totalLength: any = null;
  frontLength: any = null;
  sideLength: any = null;
  buildingLength: any = null;
  price: any = null;
  condominium: any = null;
  parking: any = null;
  bedroom: any = null;
  bathroom: any = null;
  livingRoom: any = null;
  kitchen: any = null;
  suite: any = null;
  taxes: any = null;
  streetName: any = null;
  streetNumber: any = null;
  addressAdditional: any = null;
  neighborhood: any = null;
  operationType: any = null;
  environmentType: any = null;
  html!: string;
  highlight: any = null;
  styleIcon: any = null;
  styleColor: any = null;
  selectedRealEstateType: any[] = [];
  selectedAddressNeighborhood: any[] = [];

  minBuyValue: number = 0;
  maxBuyValue: number = 500000;

  minRentValue: number = 0;
  maxRentValue: number = 3000;

  minBedroomValue: number = 0;
  maxBedroomValue: number = 4;
}
