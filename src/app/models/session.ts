import { Interceptor } from './enums';
import { User } from './user';

export class Session {
  user!: User;
  interceptor!: Interceptor;
}
