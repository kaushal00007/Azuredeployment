import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SomethingWrongDialogComponent } from '../shared/dialogs/something-wrong-dialog/something-wrong-dialog.component';
import constants from '../shared/constants';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';
import { SomethingWrongDialogModel, SuccessDialogModel } from '../models/dialog.models';
import { SuccessDialogComponent } from '../shared/dialogs/success-dialog/success-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ItemModel } from '../models/item.models';
import { DeliveryModel } from '../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  basketEmitter : EventEmitter<any>;

  constructor(private dialog: MatDialog, private stateService: StateService, private translate: TranslateService, private router: Router) {
    this.basketEmitter = new EventEmitter();
  }

  public openSomethingWrongDialog(error?: any, timeToClose?: number) {
    let dialogTitle = 'something-went-wrong-title';
    let dialogDescription = 'something-went-wrong-instruction';
    let rawTitle = false;
    let rawDescription = false;
    if (error && error.error) {
      if (error.error.title) {
        dialogTitle = error.error.title;
        rawTitle = true;
      }
      if (error.error.detail) {
        dialogDescription = error.error.detail;
        rawDescription = true;
      }
    }
    const timeToCloseInMillis = timeToClose ? timeToClose : constants.TIME_TO_CLOSE_DIALOG;
    this.dialog.open(SomethingWrongDialogComponent, {
      width: constants.DIALOG_WIDTH,
      height: constants.DIALOG_HEIGHT,
      data: new SomethingWrongDialogModel(dialogTitle, dialogDescription, rawTitle, rawDescription, timeToCloseInMillis)
    });
  }

  public openSuccessDialog(successDialogModel: SuccessDialogModel) {
    this.dialog.open(SuccessDialogComponent, {
      width: constants.DIALOG_WIDTH,
      height: constants.DIALOG_HEIGHT,
      data: successDialogModel
    });
  }

  public comparePasswords(formBuilder: FormGroup) {
    const confirmPasswordControl = formBuilder.get('confirmPassword');
    if (confirmPasswordControl.errors == null || 'passwordMismatch' in confirmPasswordControl.errors) {
      if (formBuilder.get('password').value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  public getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'bearer ' + this.stateService.getToken() });
  }

  public signOut() {
    this.stateService.clearAll();
    this.router.navigate(['start/login']);
  }

  public getFormattedDate(date: string, format: string): string {
    let formattedDate: string = '';
    if (format === 'LLLL' || format === 'MMMM') {
      return this.translate.instant(new DatePipe('en').transform(date, format));
    } else if (format === 'LLL' || format === 'MMM') {
      return this.translate.instant(new DatePipe('en').transform(date, format));
    } else if (format.includes('MMMM')) {
      const dateFormatParts: string[] = format.split('MMMM');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < dateFormatParts.length; i++) {
        if (dateFormatParts[i] !== '') {
          formattedDate += new DatePipe('en').transform(date, dateFormatParts[i]);
        }
        if (i !== dateFormatParts.length - 1) {
          formattedDate += this.translate.instant(new DatePipe('en').transform(date, 'MMMM') + '-long');
        }
      }
      return formattedDate;
    } else if (format.includes('MMM')) {
      const dateFormatParts: string[] = format.split('MMM');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < dateFormatParts.length; i++) {
        if (dateFormatParts[i] !== '') {
          formattedDate += new DatePipe('en').transform(date, dateFormatParts[i]);
        }
        if (i !== dateFormatParts.length - 1) {
          formattedDate += this.translate.instant(new DatePipe('en').transform(date, 'MMM') + '-short');
        }
      }
      return formattedDate;
    } else {
      return new DatePipe('en').transform(date, format);
    }
  }

  public updateBasket(item: ItemModel, quantity : number) {
    let basket = this.stateService.getBasket();
    let items = basket.items;
    items[item.id] != undefined && items[item.id] != 1 ? item.itemQuantity = items[item.id].itemQuantity + quantity : item.itemQuantity = quantity;
    items[item.id] = item;

    basket.items = items;
    basket.totalPrice = (parseFloat(basket.totalPrice) + parseFloat(item.itemPrice)*quantity).toFixed(2).toString();
    basket.totalQuantity = basket.totalQuantity + quantity;
  
    if(item.itemQuantity < 1 ){
        delete items[item.id];
    }

    this.stateService.setBasket(basket);
    this.basketEmitter.emit();
  }

  public addDeliveryToCart(delivery: DeliveryModel) {
    let deliveryFee = 0;
    let basket = this.stateService.getBasket();
    let _delivery = basket.delivery;
    if(_delivery != undefined) {
      deliveryFee = parseFloat(delivery.deliveryPrice) - parseFloat(_delivery.deliveryPrice)
    }else{
      deliveryFee = parseFloat(delivery.deliveryPrice);
    } 
    basket.totalPrice = (parseFloat(basket.totalPrice) + deliveryFee).toFixed(2).toString();
    basket.delivery = delivery;

    this.stateService.setBasket(basket);
    this.basketEmitter.emit();
  }

  private groupByItemId(items, key) {
    var groupby = items.reduce(function (result, current) {
      result[current[key]] = result[current[key]] || [];
      result[current[key]].push(current);
      return result;
    }, {});
    return groupby;
  }
}
