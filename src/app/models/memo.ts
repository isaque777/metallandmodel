import { RelationFile } from './relationFile';
import { Status } from './enums';

export class Memo {
  approvalStatus?: Status;
  date: Date = new Date();
  dateUpdate?: Date;
  description: string = '';
  descriptionEn?: string;
  descriptionNonHtml?: string;
  descriptionNonHtmlProcessed?: Date;
  description_html: string = '';
  elasticSearchProcessed?: Date;
  englishText: boolean = false;
  externalUserEmail?: string;
  externalUserName?: string;
  forApproval: boolean = false;
  highlight: boolean = false;
  html: boolean = false;
  id: number = 0;
  image?: Uint8Array;
  imageId?: number;
  imageUrl?: string;
  memoFiles: RelationFile[] = [];
  memoUserSelected?: any; // Userz type, replace with actual type if available
  pendingApprovalCount?: number;
  pendingApprovalId?: number;
  status: string = Status.ACTIVE; // Status enum, use string or replace with enum if defined
  subTitle: string = '';
  subTitleProcessed?: Date;
  title: string = '';
  titleEn?: string;
  translationEnProcessed?: Date;
  translationProcessed?: Date;
  views: number = 0;
  viewsToday: number = 0;
  viewsTodayDate: Date = new Date();
}
