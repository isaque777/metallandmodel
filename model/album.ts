import { RelationFile } from './relationFile';

export interface Album {
  id?: number;
  description?: string;
  label?: string;
  subDescription?: string;
  memo?: string;
  albumBands?: any[];
  ano?: string;
  albumFiles?: RelationFile[];
  albumSongs?: any[];
  albumTypes?: any[];
  albumUsers?: any[];
  albumStyles?: any[];
  albumLinks?: AlbumLink[];
  date?: Date;
  dateUpdate?: Date;
  viewsTodayDate?: Date;
  views?: number;
  catalogNumber?: number;
  viewsToday?: number;
  startDate?: Date;
}
export interface AlbumLink {
  id: number; // Long in Java becomes number in TypeScript
  album?: Album; // Reference to Album interface
  user?: any; // Reference to Userz interface
  url: string;
}
