import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel, ItemsModel } from 'src/app/models/item.models';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { HelperService } from 'src/app/services/helper.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Input() itemDetails: ItemModel;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  qunatity: number = 1;
  itemAvailable: string = '';

  constructor(private bspServiceService: BspServiceService,
    private loaderService: LoaderService,
    private helperService: HelperService,
  ) {
  }

  ngOnInit() {
    this.checkItemAvailability();
  }

  private checkItemAvailability() {
    this.loaderService.show();
    this.bspServiceService.getItemAvailability(this.itemDetails.itemCode).toPromise().then(res => {
      if (!res.availableForSale) {
        this.itemAvailable = 'Out Of Stoke'
      }
      else
        this.itemAvailable = 'Stoke Available';
      this.loaderService.dismiss();
    }).catch(error => {
      this.loaderService.dismiss();
      this.helperService.openSomethingWrongDialog(error);
    });
  }

  public addQuantity() {
    this.qunatity++;
  }

  public removeQuantity() {
    if (this.qunatity > 1)
      this.qunatity--;
  }

  public addToCart(item: ItemModel) {
    this.helperService.updateBasket(item, this.qunatity);
  }

  public onClose() {
    this.close.emit();
  }

}
