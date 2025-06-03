import { RelationFile } from './relationFile';

export class Memo {
  id;
  title: string;
  description: string;
  subTitle: string;
  memoFiles: RelationFile[] = [];
  highlight: boolean;
  html: boolean;
  description_html: string;
}
