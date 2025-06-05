import { TickerFile } from './tickerFile.js';

export class Ticker {
  id!: number;
  title!: string;
  code!: string;
  stockExchange: any = new Object();
  description!: string;
  subTitle!: string;
  tickerFiles: TickerFile[] = [];
  codeInProvider!: string;
}
