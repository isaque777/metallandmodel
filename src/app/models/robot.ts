export type RobotTarget = 'memo' | 'band' | 'album';

export class Robot {
  id?: number;
  name = '';
  targetType: RobotTarget = 'memo';
  site = '';
  startUrl = '';
  selectorType: 'CSS' | 'XPATH' = 'CSS';
  titleSelector = '';
  bodySelector = '';
  dateSelector = '';
  status = 'active';
  isEnglishSource = false;
  reviewBeforePublish = true;
  notes = '';
}