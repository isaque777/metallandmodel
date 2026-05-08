import { TypeFile } from './typeFile';

export interface Type {
  // Required fields
  id: number;
  code: string;
  title: string;
  titleEn?: string | null;

  // Optional fields with more specific types
  descriptionEn?: string | null;
  value?: string | null;
  xPath?: string | null;
  error?: string | null;
  url?: string | null;
  sortOrder?: number | null;
  date?: Date;
  dateUpdate?: Date | null;
  typeFiles?: TypeFile[] | null;
  typeFather?: Type | null;
}
