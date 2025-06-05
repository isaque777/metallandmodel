import { Interceptor } from './interceptor.js';
import { User } from './user.js';

export class Session {
  user!: User;
  interceptor!: Interceptor;
}
