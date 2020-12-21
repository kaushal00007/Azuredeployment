import {Injectable} from '@angular/core';
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StateService} from '../services/state.service';
import {AuthoritiesEnum} from '../models/account.models';

@Injectable({
  providedIn: 'root'
})
export class RetailGuard implements CanActivateChild {

  constructor(private stateService: StateService, private router: Router) {
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    const authorities = this.stateService.getAuthorities();
    if (authorities && authorities === AuthoritiesEnum.USER) {
      return true;
    } else {
      this.router.navigate(['start/login']);
      return false;
    }
  }

}
