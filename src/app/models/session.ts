import { Interceptor } from './interceptor';
import { User } from './user';

export class Session {
  user: User;
  interceptor: Interceptor;
}
