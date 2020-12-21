import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HelperService } from 'src/app/services/helper.service';
import { StateService } from 'src/app/services/state.service';
import { ItemModel, BasketModel } from 'src/app/models/item.models';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  basketItems: BasketModel;
  itemIds: string[];
  items: ItemModel[];
  columns: any[];
  qunatity: number = 1;

  constructor(private router: Router,
    private helperService: HelperService,
    private stateService: StateService) {
  }

  ngOnInit() {
    this.buildTableHeaderColumns();
    this.updateCartSummary();
  }

  updateCartSummary() {
    this.basketItems = this.stateService.getBasket();
    this.items = this.basketItems.items;
    this.itemIds = Object.keys(this.items);
  }

  private buildTableHeaderColumns() {
    this.columns = [
      {field: 'itemImg', header: 'Image', type:'image'},
      {field: 'name', header: 'Name', type:'string'},
      {field: 'itemQuantity', header: 'Quantity', type:'string'},
      {field: 'itemPrice', header: 'Price', type:'string'},
    ];
  }

  public getDeliveryOptions(){
    this.router.navigate(['retail/deliveries']);
  }

  public addQuantity(item: ItemModel) {
    this.updateCart(item, 1);
  }

  public removeQuantity(item: ItemModel) {
    if (item.itemQuantity > 0)
      this.updateCart(item, -1);

  }

  public deleteItem(item: ItemModel){

  }

  public updateCart(item: ItemModel, quantity) {
    this.helperService.updateBasket(item, quantity);
    this.updateCartSummary();
  }

}
