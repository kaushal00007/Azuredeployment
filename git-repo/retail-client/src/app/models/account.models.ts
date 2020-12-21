export enum AuthoritiesEnum {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN',
  STORE_MANAGER = 'ROLE_STORE_MANAGER',
  RETAIL_MANAGER = 'ROLE_RETAIL_MANAGER'
}

export class AccountModel {
  public login: string;
  public firstName: string;
  public email: string;
  public langKey: string;
  public authorities: string;

  constructor(login: string, firstName: string, email: string, langKey: string, authorities: string) {
    this.login = login;
    this.firstName = firstName;
    this.email = email;
    this.langKey = langKey;
    this.authorities = authorities;
  }
}

export class ChangePasswordModel {
  public currentPassword: string;
  public newPassword: string;
  constructor(currentPassword: string, newPassword: string) {
    this.currentPassword = currentPassword;
    this.newPassword = newPassword;
  }
}
//{"id":2,"userName":"ncradmin","firstName":"NCR","lastName":"Admin","userEmail":"mari@ncr.com","active":true,"modifiedDate":"2018-09-10T14:34:00","loginSession":null,"password":null}
export class UsersModel {
  public users: UserModel [];
}
export class UserModel {
  public id: number;
  public userName: string;
  public firstName: string;
  public lastName: string;
  public userEmail: string;
  public active:boolean;
  public modifiedDate: string;
  public loginSession: string;
  public password:boolean;
  public role:RoleModel;
  public authorities: AuthoritiesEnum[];
}

export class RoleModel {
  public roleName: string;
  public roleDesc: string;
}

export class SignInModel {
  public Username: string;
  public Password: string;
}

export class SignInResponseModel {
  public token: string;
  public expiry: string;
}

export class ResetPasswordModel {
  public key: string;
  public newPassword: string;

  constructor(key: string, newPassword: string) {
    this.key = key;
    this.newPassword = newPassword;
  }
}

export class LanguageModel {
  public id: number;
  public langCode: string;
  public label: string;
}
