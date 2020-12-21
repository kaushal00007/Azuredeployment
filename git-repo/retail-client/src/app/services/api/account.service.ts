import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import constants from '../../shared/constants';
import {Observable} from 'rxjs';
import {
  AccountModel,
  ResetPasswordModel,
  SignInModel,
  SignInResponseModel,
  LanguageModel,
  ChangePasswordModel,
  UsersModel
} from '../../models/account.models';
import {HelperService} from '../helper.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) {
  }

  public signIn(signInModel: SignInModel): Observable<any> {
    return this.httpClient.post<any>(constants.BACKEND_API_ENDPOINTS.FIND_USER, signInModel);
  }

}
