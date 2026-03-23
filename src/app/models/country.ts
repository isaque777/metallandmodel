export interface Country {
  id: number; // Long in Java becomes number in TypeScript
  title: string;
  code2Digits: string;
  code3Digits: string;
  flagIcon?: string | null;
  capital: string;
  date: Date; // Initialized in the service/component
  dateUpdate?: Date | null; // Optional field
}
