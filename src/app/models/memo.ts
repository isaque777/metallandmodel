import { RelationFile } from './relationFile';
import { Status } from './enums';

export class Memo {
  date: Date = new Date();
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
  memoFiles: RelationFile[] = [];
  memoUserSelected?: any; // Userz type, replace with actual type if available
  status: string = Status.ACTIVE; // Status enum, use string or replace with enum if defined
  subTitle: string = '';
  title: string = '';
  titleEn?: string;
  translationProcessed?: Date;
  views: number = 0;
  viewsToday: number = 0;
  viewsTodayDate: Date = new Date();
}
