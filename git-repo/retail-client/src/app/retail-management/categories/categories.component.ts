import { Component, OnInit, Input } from '@angular/core';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HelperService } from 'src/app/services/helper.service';
import { MatDialog } from '@angular/material';
import { CatsModel, CatModel, ItemModel } from 'src/app/models/item.models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StateService } from 'src/app/services/state.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

declare var scrollmenus: Function;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  cats: CatsModel;
  basketItems: ItemModel [] = this.stateService.getBasketItems();

  constructor(private router: Router, 
    private httpClient: HttpClient,
    private bspServiceService: BspServiceService,
    private loaderService: LoaderService,
    private helperService: HelperService,
    private stateService: StateService,
    private dialog: MatDialog) {
}

  ngOnInit() {
    this.getCats();
    // scrollmenus();
  }
  private getCats() {
    this.loaderService.show();
    this.bspServiceService.getCats().toPromise().then(cats => {
      this.cats = cats;
      scrollmenus(Object.keys(cats).length);
      this.loaderService.dismiss();
    }).catch(error => {
      this.loaderService.dismiss();
      this.helperService.openSomethingWrongDialog(error);
    });
  }

  public getCatItems(cat: CatModel){
    this.stateService.setCategory(cat);
    this.router.navigate(['retail/items', cat.id]);
  }
  
  public updateCart(items: ItemModel[]){
    this.basketItems = items;
  }

  public imageExists(image: string): Observable<boolean> {
    let url = "http://localhost:4200/assets/images/icons/"+image
    console.log("url"+url);
    // return this.httpClient.get(url).pipe(map(() => true,     console.log("true")), catchError(() => of(false)));
    return this.httpClient.get(url)
    .pipe(
        map(response => {
          console.log("response"+JSON.stringify(response));
          return true;
        }),
        catchError(error => {
          console.log("response"+JSON.stringify(error));
            return of(false);
        })
    );
  }
}

