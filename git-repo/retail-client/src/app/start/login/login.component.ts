import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AccountService } from '../../services/api/account.service';
import { StateService } from '../../services/state.service';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModel = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });
  hidePassword = true;
  isSignInExecuting = false;

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private accountService: AccountService,
    private stateService: StateService,
    private helperService: HelperService,
    private translate: TranslateService,
    private router: Router,
    private loaderService: LoaderService) {
  }

  ngOnInit() {
    // if (this.stateService.getAuthorities())
    //   this.goToHomepage();
  }

  public signIn() {
    try {
      if (!this.formModel.valid) {
        return;
      }
      this.isSignInExecuting = true;
      this.loaderService.show();
    this.accountService.signIn(this.formModel.value).toPromise().then((response: any) => {
      console.log("Token :" + JSON.stringify(response));
          this.stateService.setAccountModel(response.user);
          this.stateService.setAuthorities(response.user.role.roleName);
          this.stateService.setToken(response.token);
          this.isSignInExecuting = false;
          this.goToHomepage();
    }).catch(error => {
      console.log("Token :" + error);
          this.loaderService.dismiss();
          this.isSignInExecuting = false;
          this.helperService.openSomethingWrongDialog(error);
        });
    } catch (error) {
      console.log('sign in error: ' + error);
    }
  }

  private goToHomepage() {
    var role;
    var userRole = this.stateService.getAuthorities().trim().toString().toLowerCase();
    console.log("role : " + userRole);
    if (userRole.indexOf('admin') > -1) {
      role = 'admin'
    }
    else
      role = 'user'

    switch (role) {
      case 'admin':
        console.log("admin : ");
        this.router.navigate(['admin']);
        break;
      case 'user':
        console.log("user : ");
        this.router.navigate(['retail']);
        break;
      default:
        console.log("default : ");
        this.router.navigate(['retail']);
    }
    console.log("role : " + userRole);

    this.loaderService.dismiss();

  }

}
