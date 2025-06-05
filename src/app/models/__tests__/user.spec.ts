import { User } from '../user.js';
import { Address } from '../address.js';

describe('User', () => {
  it('should create an instance', () => {
    const user = new User();
    expect(user).toBeTruthy();
  });

  it('should initialize with constructor parameters', () => {
    const user = new User('John Doe', 'john@example.com', 'example.com');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
    expect(user.site).toBe('example.com');
  });

  it('should have default values', () => {
    const user = new User();
    expect(user.rememberMe).toBe(false);
    expect(user.address).toBeInstanceOf(Address);
    expect(user.userzTypes).toBeUndefined();
  });
});
