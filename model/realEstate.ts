import { City } from './city';
import { Address } from './address';

export class RealEstate {
  id;
  code;
  description: string;
  subTitle: string;
  realEstateFiles: any[] = [];
  realEstateType: any[] = [];
  realEstateLink: any[] = [];
  realEstatePeople: any[] = [];
  startDate: any;
  currentLabel: string;
  status: string;
  isRented: string;
  published: string;
  occupied: any;
  nonOccupiedFrom: any;
  condoName: String;
  showAddress: any;
  privativeArea: any;
  deliverDate;
  buidingInProgress: any;
  city: City;
  memo: string;
  address: Address = new Address();
  appartmentNumber: any;
  landLenght: any;
  totalLenght: any;
  frontLenght: any;
  sideLenght: any;
  buildingLenght: any;
  price: any;
  condominium: any;
  parking: any;
  bedroom: any;
  bathroom: any;
  livingroom: any;
  kitchen: any;
  suite: any;
  taxes: any;
  streetName: any;
  streetNumber: any;
  addressAdditional: any;
  neighbourhood: any;
  operationType: any;
  environmentType: any;
  html: string;
  highlight: any;
  styleIcon: any;
  styleColor: any;
  selectedRealEstateType: any[] = [];
  selectedAddressNeighbourhood: any[] = [];

  minBuyValue: number = 0;
  maxBuyValue: number = 500000;

  minRentValue: number = 0;
  maxRentValue: number = 3000;

  minBedroomValue: number = 0;
  maxBedroomValue: number = 4;
}
