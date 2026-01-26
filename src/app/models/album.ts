import { RelationFile } from './relationFile';
import { Tenant } from './tenant';

export interface AlbumTenant {
  id?: number;
  tenant?: number | Tenant;
}

export interface Album {
  albumBands?: any[];
  albumFiles?: RelationFile[];
  albumLinks?: AlbumLink[];
  albumSongs?: any[];
  albumStyles?: any[];
  albumTenant?: AlbumTenant[];
  albumTypes?: any[];
  albumUsers?: any[];
  ano?: string;
  bandDto?: any;
  catalogNumber?: number;
  date?: Date;
  dateUpdate?: Date;
  description?: string;
  id?: number;
  label?: string;
  memo?: string;
  startDate?: Date;
  subDescription?: string;
  views?: number;
  viewsToday?: number;
  viewsTodayDate?: Date;
}
export interface AlbumLink {
  id: number; // Long in Java becomes number in TypeScript
  album?: Album; // Reference to Album interface
  user?: any; // Reference to Userz interface
  url: string;
}
