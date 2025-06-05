import { Address } from '../address.js';
import { City } from '../city.js';

describe('Address', () => {
  it('should create an instance', () => {
    const address = new Address();
    expect(address).toBeTruthy();
  });

  it('should initialize with default values', () => {
    const address = new Address();
    expect(address.id).toBe(0);
    expect(address.addressNeighborhood).toEqual([]);
    expect(address.city).toEqual({});
    expect(address.region).toBe('');
  });

  it('should set city properly', () => {
    const address = new Address();
    const city = new City('Test City', 1);
    address.city = city;
    expect(address.city.title).toBe('Test City');
    expect(address.city.id).toBe(1);
  });
});
