import { Component, OnInit } from '@angular/core';
import { BasketModel, ItemModel } from 'src/app/models/item.models';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

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

  public completeTransaction(){
    this.stateService.clearAll();
    this.router.navigate(['retail']);
  }

}
