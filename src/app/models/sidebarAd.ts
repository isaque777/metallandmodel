import { RelationFile } from './relationFile';
import { Status } from './enums';

export class SidebarAd {
  id: number = 0;
  name: string = '';
  description: string = '';
  url: string = '';
  imageId?: number;
  imageUrl?: string;
  sidebarAdFiles: RelationFile[] = [];
  status: string = Status.ACTIVE;
  date: Date = new Date();
  dateUpdate?: Date;
}