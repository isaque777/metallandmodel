import { Status } from './enums';
import { RelationFile } from './relationFile';
import { PendingApprovalField } from './pendingApprovalField';
import { Tenant } from './tenant';

export interface AlbumTenant {
  id?: number;
  tenant?: number | Tenant;
}

export interface Album {
  albumBands?: any[];
  albumFather?: Album;
  albumFiles?: RelationFile[];
  albumLinks?: AlbumLink[];
  albumSongs?: any[];
  albumStyles?: any[];
  albumTenant?: AlbumTenant[];
  albumTypes?: any[];
  albumUsers?: any[];
  ano?: string;
  approvalStatus?: Status;
  bandDto?: any;
  catalogNumber?: number;
  date?: Date;
  dateUpdate?: Date;
  description?: string;
  hasOwnPendingApproval?: boolean;
  hasPendingApproval?: boolean;
  id?: number;
  label?: string;
  memo?: string;
  pendingApprovalDate?: Date;
  pendingApprovalCount?: number;
  pendingApprovalId?: number;
  pendingFieldChanges?: PendingApprovalField[];
  startDate?: Date;
  status?: Status;
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
