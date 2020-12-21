import { HelperService } from './../../services/helper.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { ItemsModel, ItemModel } from 'src/app/models/item.models';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParseError } from '@angular/compiler';
import { SuccessDialogModel } from 'src/app/models/dialog.models';

@Component({
  selector: 'app-itemupdate',
  templateUrl: './itemupdate.component.html',
  styleUrls: ['./itemupdate.component.scss'],
})
export class ItemupdateComponent implements OnInit {
  itemId: number;
  item: ItemModel;
  items: ItemsModel;
  itemData: string;
  successData: SuccessDialogModel;

  constructor(
    private bspServiceService: BspServiceService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private helperService: HelperService
  ) {
    this.itemId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('ItemUpdate Component, ' + this.itemData);
  }

  ngOnInit(): void {
    //this.itemId = 1000125;
    console.log('ItemUpdate Component, ' + this.itemData);
    console.log('ngOnInit function called - ' + this.itemId);
    this.getItemDetails();
  }
  private getItemDetails() {
    console.log('getItemDetails function called - ' + this.itemId);
    this.loaderService.show();
    this.bspServiceService
      .GetItemDetails(this.itemId)
      .toPromise()
      .then((itemsModel) => {
        this.items = itemsModel;
        console.log('Items:' + JSON.stringify(this.items));

        console.log('ItemDetails - ' + this.itemId + ' are fetched');
        //console.log("ItemDetails - " + this.catId + " - " + (this.items).length );
        //console.log("ItemDetails - " + this.catId + " - " + (this.items)[0].id );

        this.loaderService.dismiss();
      })
      .catch((error) => {
        this.loaderService.dismiss();
        console.log('ItemDetails - ' + this.itemId + ' are not fetched');
      });
  }

  public updateItemPrice() {
    console.log('Update function called');
    const newPrice = parseFloat(
      (document.getElementById('item_price_ip_input') as HTMLInputElement).value
    );
    console.log(
      'Updated Price - ' + newPrice + ' for item_number - ' + this.itemId
    );
    this.bspServiceService.updateItemPrice(this.itemId, newPrice);

    /*this.successData = new SuccessDialogModel(
      'title',
      10,
      'Success',
      'kdjf',
      'sjdfh'
    );

    this.helperService.openSuccessDialog(this.successData);*/

    alert('Success Dialog');

    this.router.navigate(['admin/editData']);
  }

  public cancelClicked() {
    console.log('Cancel function called');
    this.router.navigate(['admin/editData']);
  }
}
