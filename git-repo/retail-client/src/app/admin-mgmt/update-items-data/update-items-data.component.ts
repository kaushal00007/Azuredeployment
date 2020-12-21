import { StateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { CatsModel, CatModel, ItemsModel } from 'src/app/models/item.models';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-update-items-data',
  templateUrl: './update-items-data.component.html',
  styleUrls: ['./update-items-data.component.scss'],
})
export class UpdateItemsDataComponent implements OnInit {
  cats: CatsModel;
  items: ItemsModel;
  dataList: any[];
  keys: string[];
  ItemId: string;
  catId: string;

  constructor(
    private bspServiceService: BspServiceService,
    private loaderService: LoaderService,
    private helperService: HelperService,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.bspServiceService
      .getCats()
      .toPromise()
      .then((cats) => {
        this.cats = cats;
        this.catId =
          this.stateService.getSelectedCat() != null
            ? this.stateService.getSelectedCat()
            : cats[0].id;
        this.GetItemsForTheCat(this.catId);
        this.loaderService.dismiss();
      })
      .catch((error) => {
        this.loaderService.dismiss();
        this.helperService.openSomethingWrongDialog(error);
      });
  }

  GetItemsForTheCat(catId: string) {
    //update the ui
    console.log('Category ' + catId + 'is selected..!!');
    this.bspServiceService
      .getCatItemDetails(parseInt(catId))
      .toPromise()
      .then((itemModel) => {
        console.log(JSON.stringify(itemModel));
        this.loaderService.dismiss();
        this.items = itemModel;
        this.catId = catId;
        this.stateService.setSelectedCat(this.catId);
        // if (itemModel.items.length > 0) {
        //   this.dataList = itemModel.items;
        //   //this.keys = itemModel.items.values;
        // }
      })
      .catch((error) => {
        this.loaderService.dismiss();
        this.helperService.openSomethingWrongDialog(error);
      });
  }

  public EdititemsFortheID(ItemId: string) {
    console.log('Navigate to edit items page');
    console.log('Get item details for the item' + ItemId);
    this.router.navigate(['admin/itemUpdate', ItemId]);
  }

  public goBacktoAdmin() {
    this.router.navigate(['admin']);
  }
}
