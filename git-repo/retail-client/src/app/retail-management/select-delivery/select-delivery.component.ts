import { Component, OnInit } from '@angular/core';
import { DeliveryModel } from 'src/app/models/delivery';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/models/item.models';
import { HelperService } from 'src/app/services/helper.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-select-delivery',
  templateUrl: './select-delivery.component.html',
  styleUrls: ['./select-delivery.component.scss']
})
export class SelectDeliveryComponent implements OnInit {

  deliveries : DeliveryModel[] = [];
  SelectedDelivery: DeliveryModel;
  constructor(private router: Router,
      private stateService: StateService,
      private helperService: HelperService,
    ){}

  ngOnInit() {
    this.getDeliveries();
    this.getSelectedDelivery();    
  }

  private getDeliveries() {
    this.deliveries.push(new DeliveryModel('pickUp', '0.00', 'Pick Up'));
    this.deliveries.push(new DeliveryModel('delivery', '10.00', 'Delivery'));
    console.log("deliveries :" + JSON.stringify(this.deliveries));
  }

  public getSelectedDelivery(){
    let basket = this.stateService.getBasket();
    this.SelectedDelivery = basket.delivery;
    this.setSelectedDelivery(this.SelectedDelivery);
  }

  public setSelectedDelivery(delivery: DeliveryModel){
    this.SelectedDelivery = delivery;
    this.addDeliveryToCart(this.SelectedDelivery)
  }

  public createOrder(){
    this.router.navigate(['retail/payment']);
  }
  
  public addDeliveryToCart(delivery: DeliveryModel) {
    this.helperService.addDeliveryToCart(delivery);
  }

}
