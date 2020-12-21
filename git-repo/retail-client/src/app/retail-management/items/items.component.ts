import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsModel, ItemModel } from 'src/app/models/item.models';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HelperService } from 'src/app/services/helper.service';
import { MatDialog } from '@angular/material';
import { StateService } from 'src/app/services/state.service';
declare var scrollmenus: Function;

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: ItemsModel;
  selectedItem: ItemModel;
  openItemDetails: boolean = false;
  catId: number;
  catName: string;
  width: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bspServiceService: BspServiceService,
    private loaderService: LoaderService,
    private stateService: StateService,
    private helperService: HelperService,
    private dialog: MatDialog) {
    this.catId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getItems();
    scrollmenus();
    this.catName = this.stateService.getCategory().name;
  }

  private getItems() {
    this.loaderService.show();
    this.bspServiceService.getCatItemDetails(this.catId).toPromise().then(itemsModel => {
      this.items = itemsModel;
      this.width = Math.round(Object.keys(this.items).length / 2) * 425 + 'px';
      this.loaderService.dismiss();
    }).catch(error => {
      this.loaderService.dismiss();
      this.helperService.openSomethingWrongDialog(error);
    });
  }

  public setSelectedItem(item: ItemModel) {
    this.selectedItem = item;
    this.openItemDetails = true;
    console.log("Itm :"+item.name)
  }

  public closeItemDetailsPopup() {
    this.selectedItem = null;
    this.openItemDetails = false;
  }

}