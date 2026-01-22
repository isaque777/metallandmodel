import { Status } from "./enums";

export interface Band {
  // Required fields (adjust according to your needs)
  id: number; // Long in Java becomes number in TypeScript
  description: string;

  // Optional fields (all others from the Java class)
  bandFather?: Band;
  status?: Status; // You'll need to define Status enum
  approvalStatus?: Status;
  startDate?: string;
  currentLabel?: string;
  memoBandProcessed?: Date;
  memo?: string;
  cityState?: string;
  bandStatus?: BandStatus[];
  bandLogo?: BandLogo[];
  bandFiles?: BandFile[];
  bandImage?: BandImage[];
  bandTenant?: BandImage[];
  bandStyle?: BandStyle[];
  bandCountry?: BandCountry[];
  bandUser?: BandUser[];
  bandLink?: BandLink[];
  bandMember?: BandMember[];
  bandAlbum?: BandAlbum[];
  subDescription?: string;
}

// Minimal supporting interfaces (define these as needed)
export interface BandStatus {
  [key: string]: any;
}
export interface BandLogo {
  [key: string]: any;
}
export interface BandFile {
  [key: string]: any;
}
export interface BandImage {
  [key: string]: any;
}
export interface BandStyle {
  [key: string]: any;
}
export interface BandCountry {
  [key: string]: any;
}
export interface BandUser {
  [key: string]: any;
}
export interface BandLink {
  [key: string]: any;
}
export interface BandTenant {
  [key: string]: any;
}
export interface BandMember {
  [key: string]: any;
}
export interface BandAlbum {
  [key: string]: any;
}
