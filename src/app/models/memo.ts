import { RelationFile } from './relationFile.js';

export class Memo {
  id: number = 0;
  title: string = '';
  description: string = '';
  subTitle: string = '';
  memoFiles: RelationFile[] = [];
  highlight: boolean = false;
  html: boolean = false;
  description_html: string = '';
}
