import { Address } from './address';
import { Tenant } from './tenant';

export class User {
  public rememberMe: boolean = false;
  public socialToken: string;
  public tenantObj: Tenant;
  public phone: string;
  public userName: string;
  public userzTypes: any[];
  public cpf: string;
  public address: Address = new Address();

  constructor(
    public name?: string,
    public email?: string,
    public site?: string,
    public password?: string,
    public PasswordConfirmComponent?: string,
    public photoUrl?: string,
    public social?: string,
    public randomAlphaNumeric?: string,
    public roles?: any[],
    public userzRole?: any[],
    public id?: number,
  ) {}
}
