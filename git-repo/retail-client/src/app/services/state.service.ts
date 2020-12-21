import {Injectable} from '@angular/core';
import constants from '../shared/constants';
import {AccountModel, AuthoritiesEnum, UserModel} from '../models/account.models';
import { CatModel, ItemsModel, ItemModel, BasketModel } from '../models/item.models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
  }

  public getAccountModel(): AccountModel {
    return new AccountModel(
      this.getLogin(),
      this.getFirstName(),
      this.getEmail(),
      this.getLanguage(),
      this.getAuthorities()
    );
  }

  public getToken(): string {
    if (localStorage.getItem(constants.STORAGE_ACCESS_TOKEN_KEY)) {
      return localStorage.getItem(constants.STORAGE_ACCESS_TOKEN_KEY);
    } else {
      return sessionStorage.getItem(constants.STORAGE_ACCESS_TOKEN_KEY);
    }
  }

  public getFirstName(): string {
    if (localStorage.getItem(constants.STORAGE_FIRST_NAME_KEY)) {
      return localStorage.getItem(constants.STORAGE_FIRST_NAME_KEY);
    } else {
      return sessionStorage.getItem(constants.STORAGE_FIRST_NAME_KEY);
    }
  }

  public getEmail(): string {
    if (localStorage.getItem(constants.STORAGE_EMAIL_KEY)) {
      return localStorage.getItem(constants.STORAGE_EMAIL_KEY);
    } else {
      return sessionStorage.getItem(constants.STORAGE_EMAIL_KEY);
    }
  }

  public getLogin(): string {
    if (localStorage.getItem(constants.STORAGE_LOGIN_KEY)) {
      return localStorage.getItem(constants.STORAGE_LOGIN_KEY);
    } else {
      return sessionStorage.getItem(constants.STORAGE_LOGIN_KEY);
    }
  }

  public getLanguage(): string {
    if (localStorage.getItem(constants.STORAGE_LANGUAGE_KEY)) {
      return localStorage.getItem(constants.STORAGE_LANGUAGE_KEY);
    } else {
      return sessionStorage.getItem(constants.STORAGE_LANGUAGE_KEY);
    }
  }

  public getAuthorities(): string {
    if (localStorage.getItem(constants.STORAGE_AUTHORITIES_KEY)) {
      return localStorage.getItem(constants.STORAGE_AUTHORITIES_KEY);
    } else {
      return sessionStorage.getItem(constants.STORAGE_AUTHORITIES_KEY);
    }
  }

  public setAccountModel(accountModel: UserModel) {
    this.setUserId(accountModel.userEmail);
    this.setUserName(accountModel.userName);
    this.setFirstName(accountModel.firstName);
    this.setEmail(accountModel.userEmail);
    this.setLastName(accountModel.lastName);
    this.setAuthorities(accountModel.authorities);
  }

  public setToken(token: string) {
    sessionStorage.setItem(constants.STORAGE_ACCESS_TOKEN_KEY, token);
  }

  public setFirstName(firstName: string) {
    sessionStorage.setItem(constants.STORAGE_FIRST_NAME_KEY, firstName);
  }

  public setEmail(email: string) {
    sessionStorage.setItem(constants.STORAGE_EMAIL_KEY, email);
  }

  public setUserId(login: string) {
    sessionStorage.setItem(constants.STORAGE_LOGIN_KEY, login);
  }

  public setLastName(lastName: string) {
    sessionStorage.setItem(constants.STORAGE_LAST_NAME_KEY, lastName);
  }

  public setUserName(userName: string) {
    sessionStorage.setItem(constants.STORAGE_USER_NAME_KEY, userName);
  }

  public setAuthorities(authorities: AuthoritiesEnum[]) {
      sessionStorage.setItem(constants.STORAGE_AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public updateAccountModel(accountModel: AccountModel) {
    this.updateLogin(accountModel.login);
    this.updateFirstName(accountModel.firstName);
    this.updateEmail(accountModel.email);
    this.updateAuthorities(accountModel.authorities);
  }

  public updateToken(token: string) {
    if (localStorage.getItem(constants.STORAGE_ACCESS_TOKEN_KEY)) {
      localStorage.setItem(constants.STORAGE_ACCESS_TOKEN_KEY, token);
    } else if (sessionStorage.getItem(constants.STORAGE_ACCESS_TOKEN_KEY)) {
      sessionStorage.setItem(constants.STORAGE_ACCESS_TOKEN_KEY, token);
    }
  }

  public updateTokenExpiry(expiry: string) {
    if (localStorage.getItem(constants.STORAGE_ACCESS_TOKEN_EXPIRY_KEY)) {
      localStorage.setItem(constants.STORAGE_ACCESS_TOKEN_EXPIRY_KEY, expiry);
    } else if (sessionStorage.getItem(constants.STORAGE_ACCESS_TOKEN_EXPIRY_KEY)) {
      sessionStorage.setItem(constants.STORAGE_ACCESS_TOKEN_EXPIRY_KEY, expiry);
    }
  }

  public updateFirstName(firstName: string) {
    if (localStorage.getItem(constants.STORAGE_FIRST_NAME_KEY)) {
      localStorage.setItem(constants.STORAGE_FIRST_NAME_KEY, firstName);
    } else if (sessionStorage.getItem(constants.STORAGE_FIRST_NAME_KEY)) {
      sessionStorage.setItem(constants.STORAGE_FIRST_NAME_KEY, firstName);
    }
  }

  public updateEmail(email: string) {
    if (localStorage.getItem(constants.STORAGE_EMAIL_KEY)) {
      localStorage.setItem(constants.STORAGE_EMAIL_KEY, email);
    } else if (sessionStorage.getItem(constants.STORAGE_EMAIL_KEY)) {
      sessionStorage.setItem(constants.STORAGE_EMAIL_KEY, email);
    }
  }

  public updateLogin(login: string) {
    if (localStorage.getItem(constants.STORAGE_LOGIN_KEY)) {
      localStorage.setItem(constants.STORAGE_LOGIN_KEY, login);
    } else if (sessionStorage.getItem(constants.STORAGE_LOGIN_KEY)) {
      sessionStorage.setItem(constants.STORAGE_LOGIN_KEY, login);
    }
  }
  public updateAuthorities(authorities: string) {
    if (localStorage.getItem(constants.STORAGE_AUTHORITIES_KEY)) {
      localStorage.setItem(constants.STORAGE_AUTHORITIES_KEY, JSON.stringify(authorities));
    } else if (sessionStorage.getItem(constants.STORAGE_AUTHORITIES_KEY)) {
      sessionStorage.setItem(constants.STORAGE_AUTHORITIES_KEY, JSON.stringify(authorities));
    }
  }

  public setCategory(cat: CatModel) {
    sessionStorage.setItem(constants.STORAGE_CATEGORY, JSON.stringify(cat));
  }

  public getCategory(): CatModel {
    if (localStorage.getItem(constants.STORAGE_CATEGORY)) {
      return JSON.parse(localStorage.getItem(constants.STORAGE_CATEGORY));
    } else {
      return JSON.parse(sessionStorage.getItem(constants.STORAGE_CATEGORY));
    }
  }

  public setBasketItems(items: ItemModel []) {
    sessionStorage.setItem(constants.STORAGE_BASKET_ITEMS, JSON.stringify(items));
  }

  public getBasketItems(): ItemModel [] {
    let items: ItemModel [];
    if (localStorage.getItem(constants.STORAGE_BASKET_ITEMS)) {
      items = JSON.parse(localStorage.getItem(constants.STORAGE_BASKET_ITEMS));
    } else {
      items = JSON.parse(sessionStorage.getItem(constants.STORAGE_BASKET_ITEMS));
    }
    return items != null ? items : [];
  }

  public setBasket(items: BasketModel) {
    sessionStorage.setItem(constants.STORAGE_BASKET_ITEMS, JSON.stringify(items));
  }

  public getBasket(): BasketModel {
    let items: BasketModel;
    if (localStorage.getItem(constants.STORAGE_BASKET_ITEMS)) {
      items = JSON.parse(localStorage.getItem(constants.STORAGE_BASKET_ITEMS));
    } else {
      items = JSON.parse(sessionStorage.getItem(constants.STORAGE_BASKET_ITEMS));
    }
    return items != null ? items : new BasketModel();
  }

  public setSelectedCat(CatId: string) {
    sessionStorage.setItem(constants.SELECTED_CAT, CatId);
  }
  public getSelectedCat() {
    return sessionStorage.getItem(constants.SELECTED_CAT);
  }

  public clearAll() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
