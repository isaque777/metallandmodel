import { Interceptor } from './Enums';
import { User } from './user';

export class Session {
  user!: User;
  interceptor!: Interceptor;
}
