import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentModel } from 'src/app/models/payment';
import { BasketModel } from 'src/app/models/item.models';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss']
})
export class SelectPaymentComponent implements OnInit {

  paymentTypes: PaymentModel[] = [];
  SelectedPayment: PaymentModel;
  basketItems: BasketModel;

  constructor(private router: Router,
    private stateService: StateService) {
  }

  ngOnInit() {
    this.getCartSummary();
    this.paymentTypes.push(new PaymentModel('POD', 'Pay on Delivery'))
    this.paymentTypes.push(new PaymentModel('NetBanking', 'Net Banking'))
    console.log("deliveries :" + JSON.stringify(this.paymentTypes));
  }

  getCartSummary() {
    this.basketItems = this.stateService.getBasket();
  }

  public setSelectedPayment(payment: PaymentModel) {
    this.SelectedPayment = payment;
  }

  public createOrder() {
    this.router.navigate(['retail/orderSummary']);
  }

}
