export class Rss {
  id!: number;
  title!: string;
  link!: string;
  status!: string;
  name!: string;
  site!: string;
  isEnglishSource = false;
  sourceLanguage?: 'en' | 'pt' | 'fr';
  hideOnFeed = false;
}
